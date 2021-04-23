//importing types
import { ProductData } from '../interfaces';
import { ActionType } from './cart.action-types';
//action creators
export const addProduct = (nextCartItem: ProductData) => ({
  type: ActionType.ADD_TO_CART,
  payload: nextCartItem,
});

export const removeCartItem = (cartItem: ProductData) => ({
  type: ActionType.REMOVE_CART_ITEM,
  payload: cartItem,
});
