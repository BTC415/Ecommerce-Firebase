//importing types
import { ProductData, Products } from '../interfaces';
import { ActionType } from './products.action-types';
//action type
export type ProductsAction =
  | AddProductStartAction
  | SetProductsAction
  | DeleteProductStart
  | FetchProductsStartAction;
//start action interfaces
export interface AddProductStartAction {
  type: ActionType.ADD_NEW_PRODUCT_START;
  payload: ProductData;
}
export interface FetchProductsStartAction {
  type: ActionType.FETCH_PRODUCTS_START;
  payload: string;
}
export interface DeleteProductStart {
  type: ActionType.DELETE_PRODUCT_START;
  payload: string;
}
//other action interfaces
interface SetProductsAction {
  type: ActionType.SET_PRODUCTS;
  payload: Products;
}
