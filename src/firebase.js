// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyqskPBlKgAL4WTc-aXcwc2mZ-KP0mZIY",
    authDomain: "todo-app-38e9c.firebaseapp.com",
    projectId: "todo-app-38e9c",
    storageBucket: "todo-app-38e9c.appspot.com",
    messagingSenderId: "36981186304",
    appId: "1:36981186304:web:bdd3956c21336da99f9de5",
    measurementId: "G-B8DJHSNSFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)