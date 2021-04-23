//importing types
import { ProductData } from '../interfaces';
import { ActionType } from './cart.action-types';
//action type
export type CartAction = AddProductAction | DeleteProductAction;
//action interfaces
export interface AddProductAction {
  type: ActionType.ADD_TO_CART;
  payload: ProductData;
}

export interface DeleteProductAction {
  type: ActionType.REMOVE_CART_ITEM;
  payload: ProductData;
}
