import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9TAgtSBgCCvz4S9RTInTCwTMHrgB5n28",
  authDomain: "bmicalculatorapp-ba3a0.firebaseapp.com",
  projectId: "bmicalculatorapp-ba3a0",
  storageBucket: "bmicalculatorapp-ba3a0.appspot.com",
  messagingSenderId: "50014243017",
  appId: "1:50014243017:web:601ac1d1044048500ba518",
};

// // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = getFirestore();

export { db };
