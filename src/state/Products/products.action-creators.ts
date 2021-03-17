//importing types
import { ActionType } from './products.action-types';
import { Product } from '../interfaces';
//start action creators
export const addProductStart = (productData: Product) => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});
