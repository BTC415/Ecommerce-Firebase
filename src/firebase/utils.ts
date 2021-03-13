//firebase utils
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';
//importing interfaces
import { HandleUser } from '../state/interfaces';
//exporing utilities
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
//signin with google provider
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
//saving user profile to firestore
export const handleUserProfile = async ({ userAuth, moreData }: HandleUser) => {
  if (!userAuth) {
    return null;
  }
  //getting currentUser properties
  const { uid, displayName, email } = userAuth;
  const timeStamp = new Date();
  //creating a doc with user id
  const userRef = db.doc(`users/${uid}`);
  //getting user's data
  const userData = await userRef.get();
  //saving user's data
  if (!userData.exists) {
    try {
      await userRef.set({
        email,
        displayName,
        createdDate: timeStamp,
        ...moreData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  //returning currentUser
  return userRef;
};
//current user helper function
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
