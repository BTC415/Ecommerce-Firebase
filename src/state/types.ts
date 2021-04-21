//importing firebase utils
import firebase from 'firebase/app';
//importing types
import { CombinedState } from 'redux';
import { UserState } from './User/user.reducer';
import { ProductsState } from './Products/products.reducer';
import { CartState } from './Cart/cart.reducer';
//additional types
export type userRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
export type userData = firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;
export type doc = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;
export type queryDoc = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;
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
export type State = CombinedState<{
  user: UserState;
  productsData: ProductsState;
  cart: CartState;
}>;
