//importing firebase utils
import firebase from 'firebase/app';
//additional types
export type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
export type userData = firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;
export type userAuth = firebase.User | null;
export type JSXInputElement = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type JSXSelectElement = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
export type JSXButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
