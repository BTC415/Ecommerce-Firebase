import { RouteComponentProps } from 'react-router';
import firebase from 'firebase/app';
//interfaces
export interface CurrentUser {
  email: string;
  displayName: string;
  id: string;
}
export interface EmailPassword {
  email: string;
  password: string;
}
export interface HandleUser {
  userAuth: firebase.User | null;
  moreData?: any;
}
export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
//router props
export interface PropsWithRouter extends RouteComponentProps<any> {}
