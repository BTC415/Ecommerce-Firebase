import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';
//exporing utilities
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
//signing with google handler
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
