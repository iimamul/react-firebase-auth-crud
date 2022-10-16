// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVCFNDhnqiy-viEO6C_MrpBXoHftFnVQw",
  authDomain: "react-firebase-c2319.firebaseapp.com",
  projectId: "react-firebase-c2319",
  storageBucket: "react-firebase-c2319.appspot.com",
  messagingSenderId: "440229316033",
  appId: "1:440229316033:web:ab7170bfe7b331f3399b40",
  measurementId: "G-V1QPMHNXH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const auth=getAuth(app)
const db= getFirestore(app)

export {auth,db}