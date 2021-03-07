import firebase from 'firebase/app';
//currentUser
export interface CurrentUser {
  email?: string;
  displayName?: string;
  uid?: string;
  data?: firebase.firestore.DocumentData | undefined;
}
