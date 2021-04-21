//importing types
import { ActionType } from './cart.action-types';
import { ProductData } from '../interfaces';
import { AddProductAction } from './cart.actions';
import { handleAddToCart } from './cart.helpers';
//state interface
export interface CartState {
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
        cartItems: handleAddToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
