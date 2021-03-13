//importing firebase utils
import firebase from 'firebase/app';
//types
export type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
export type userData = firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;
export type userAuth = firebase.User | null;
