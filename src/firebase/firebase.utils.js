import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAa06QrP6k8w5msqblm0znjPZxtGfVHkoo",
  authDomain: "e-commerce-app-db.firebaseapp.com",
  databaseURL: "https://e-commerce-app-db.firebaseio.com",
  projectId: "e-commerce-app-db",
  storageBucket: "e-commerce-app-db.appspot.com",
  messagingSenderId: "1052375591954",
  appId: "1:1052375591954:web:1cd7070901f6cd1ea2bccb",
  measurementId: "G-94RHQ6S230"
};
//initizalize the app  with the configuaration above
firebase.initializeApp(config);

// auth and store
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// creating a povider from a class GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// sign in with google
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
