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
  measurementId: "G-94RHQ6S230",
};
//create a profile from using firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // using the id of the user
  const userRef = firestore.doc(`/user/${userAuth.uid}`);
  // using snap shot to get the ref of user
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Add collection to the database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
// converting snapshop
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
 return transformedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
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
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
