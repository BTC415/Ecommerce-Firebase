//importing types
import { ActionType } from './cart.action-types';
import { ProductData } from '../interfaces';
//state interface
interface CartState {
  cartItems: ProductData[];
}
//initial state
const initialState: CartState = {
  cartItems: [],
};
//reducer
const cartReducer = (state: CartState = initialState, action) => {};
