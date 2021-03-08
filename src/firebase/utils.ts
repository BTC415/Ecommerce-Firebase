import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';
//exporing utilities
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
//signin with google provider
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
//saving user profile to firestore
export const handleUserProfile = async (
  userAuth: firebase.User | null,
  moreData?: any
) => {
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
