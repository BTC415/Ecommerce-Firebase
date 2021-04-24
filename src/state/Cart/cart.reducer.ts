//importing types
import { ActionType } from './cart.action-types';
import { ProductData } from '../interfaces';
//importing actions & helpers
import { CartAction } from './cart.actions';
import { handleAddToCart, handleRemoveCartItem } from './cart.helpers';
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
  action: CartAction
): CartState => {
  switch (action.type) {
    case ActionType.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: handleAddToCart(state.cartItems, action.payload),
      };
    case ActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
