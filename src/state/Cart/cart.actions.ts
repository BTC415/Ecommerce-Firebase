//importing types
import { ProductData } from '../interfaces';
import { ActionType } from './cart.action-types';
//action type
export type CartAction =
  | AddCartItemAction
  | DeleteCartItemAction
  | ReduceCartItemAction;
//action interfaces
export interface AddCartItemAction {
  type: ActionType.ADD_CART_ITEM;
  payload: ProductData;
}

export interface DeleteCartItemAction {
  type: ActionType.REMOVE_CART_ITEM;
  payload: string;
}

export interface ReduceCartItemAction {
  type: ActionType.REDUCE_CART_ITEM;
  payload: string;
}
