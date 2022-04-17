// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdDbJY0BP4Pdkl20l_FnxVCMce8OVXdjw",
    authDomain: "tutorspree.firebaseapp.com",
    projectId: "tutorspree",
    storageBucket: "tutorspree.appspot.com",
    messagingSenderId: "275946599507",
    appId: "1:275946599507:web:d319c38aa4b0a0a13942a6",
    measurementId: "G-RRJDT7PF5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;