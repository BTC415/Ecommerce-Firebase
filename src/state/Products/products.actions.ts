//importing types
import { Product } from '../interfaces';
import { ActionType } from './products.action-types';
//action type
export type ProductsAction = AddProductStartAction;
//start action interfaces
export interface AddProductStartAction {
  type: ActionType.ADD_NEW_PRODUCT_START;
  payload: Product;
}
