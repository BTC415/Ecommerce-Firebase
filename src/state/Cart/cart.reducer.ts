//importing types
import { ActionType } from './cart.action-types';
import { ProductData } from '../interfaces';
import { AddProductAction } from './cart.actions';
//state interface
interface CartState {
  cartItems: ProductData[];
}
//initial state
const initialState: CartState = {
  cartItems: [],
};
//reducer
const cartReducer = (
  state: CartState = initialState,
  action: AddProductAction
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload }],
      };
    default:
      return state;
  }
};

export default cartReducer;
