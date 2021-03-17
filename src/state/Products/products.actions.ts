//importing types
import { Product } from '../interfaces';
import { ActionType } from './products.action-types';
//action type
export type ProductsAction = AddProductStartAction | SetProductsAction;
//start action interfaces
export interface AddProductStartAction {
  type: ActionType.ADD_NEW_PRODUCT_START;
  payload: Product;
}
interface SetProductsAction {
  type: ActionType.SET_PRODUCTS;
  payload: Product[];
}
