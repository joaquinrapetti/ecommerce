import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1HM6pjJh8enLjHrr759M01jogMmfkzrI",
  authDomain: "crwn-db-df01e.firebaseapp.com",
  projectId: "crwn-db-df01e",
  storageBucket: "crwn-db-df01e.appspot.com",
  messagingSenderId: "228705829472",
  appId: "1:228705829472:web:9b3e07744a67a4f44a3905",
  measurementId: "G-51TMV5M77R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
