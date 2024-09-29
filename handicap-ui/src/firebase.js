// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "angel-golf-handicap.firebaseapp.com",
  projectId: "angel-golf-handicap",
  storageBucket: "angel-golf-handicap.appspot.com",
  messagingSenderId: "865562785828",
  appId: "1:865562785828:web:e7b8ca8d8305ed5d2200b1",
  measurementId: "G-3CFQHQVC1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
//const analytics = getAnalytics(app);