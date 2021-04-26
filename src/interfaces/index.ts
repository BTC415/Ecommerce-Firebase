import firebase from 'firebase/app';
import { doc, queryDoc } from '../../types';
//interfaces
export interface CurrentUser {
  email: string;
  displayName: string;
  id: string;
  userRoles: string[];
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

export interface FormOptions {
  name: string;
  value: string;
}

export interface ProductData {
  category: string;
  name: string;
  description: string;
  thumbnail: string;
  documentId?: string;
  price: number;
  productAdminUserUID?: string;
  createdDate?: Date;
  quantity: number;
}

export interface ProductDataLite {
  name: string;
  thumbnail: string;
  documentId?: string;
  price: number;
  quantity: number;
}

export interface Products {
  data: ProductData[];
  queryDoc?: queryDoc | null;
  isLastPage: boolean;
}

export interface FetchProductsParams {
  filterType: string;
  startAfterDoc?: doc;
  persistProducts?: ProductData[];
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface Order {
  orderTotal: number;
  orderItems: ProductDataLite[];
  orderUserId?: string;
  orderCreatedDate?: Date;
}
