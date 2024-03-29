import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from '../../../assets/social/businesslogo.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className="hover:text-blue-200"><Link to="/">Home</Link></li>
        <li className="hover:text-blue-200"><Link to="/menu">Our Menu</Link></li>
        <li className="hover:text-blue-200"><Link to="/order/salad">Order Food</Link></li>
        {
            isAdmin ? <li className="hover:text-blue-200"><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
            <li className="hover:text-blue-200"><Link to="/dashboard/userhome">Dashboard</Link></li>
        }
        <li className="hover:text-blue-200">
            <Link to="/dashboard/mycart">
                <button className="btn gap-2 -mt-3 w-18  ">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li className="hover:text-blue-200"><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  hover:text-blue-200 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="w-24  -ms-5  h-20 " src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl -ms-10 ">Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hover:bg-white">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;