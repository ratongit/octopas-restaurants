// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4FV8HQq_Li72QlQ_gv0ErQ9kIUTiYPLU",
  authDomain: "octopus-restaurants.firebaseapp.com",
  projectId: "octopus-restaurants",
  storageBucket: "octopus-restaurants.appspot.com",
  messagingSenderId: "1013902908046",
  appId: "1:1013902908046:web:12ad08a89ca494943447df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;