//importing types
import { ActionType } from './products.action-types';
import { Product } from '../interfaces';
import { ProductAction } from './products.actions';
//start action creators
export const addProductStart = (productData: Product): ProductAction => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});
