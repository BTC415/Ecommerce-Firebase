//importing types
import { ProductData } from '../../interfaces';
import { ActionType } from './cart.action-types';
//action creators
export const addCartItem = (nextCartItem: ProductData) => ({
  type: ActionType.ADD_CART_ITEM,
  payload: nextCartItem,
});

export const removeCartItem = (documentId: string) => ({
  type: ActionType.REMOVE_CART_ITEM,
  payload: documentId,
});

export const reduceCartItem = (cartItem: ProductData) => ({
  type: ActionType.REDUCE_CART_ITEM,
  payload: cartItem,
});
