//importing types
import { ProductData } from '../interfaces';
import { ActionType } from './cart.action-types';
//action type
export type CartAction = AddProductAction;
//action interfaces
export interface AddProductAction {
  type: ActionType.ADD_TO_CART;
  payload: ProductData;
}
