//importing types
import { ActionType } from './products.action-types';
import { Product } from '../interfaces';
import { ProductsAction } from './products.actions';
//start action creators
export const addProductStart = (productData: Product): ProductsAction => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (): ProductsAction => ({
  type: ActionType.FETCH_PRODUCTS_START,
});

export const setProducts = (products: Product[]): ProductsAction => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});

export const deleteProductStart = (productID: string): ProductsAction => ({
  type: ActionType.DELETE_PRODUCT_START,
  payload: productID,
});
