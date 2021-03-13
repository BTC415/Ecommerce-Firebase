import { RouteComponentProps } from 'react-router';

//currentUser
export interface CurrentUser {
  email: string;
  displayName: string;
  id: string;
}
//email password
export interface EmailPassword {
  email: string;
  password: string;
}
//router props
export interface PropsWithRouter extends RouteComponentProps<any> {}
