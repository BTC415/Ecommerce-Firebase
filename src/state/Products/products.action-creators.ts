//importing types
import { ActionType } from './products.action-types';
import { Product } from '../interfaces';
import { ProductsAction } from './products.actions';
//start action creators
export const addProductStart = (productData: Product): ProductsAction => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = () => ({
  type: ActionType.FETCH_PRODUCTS_START,
});

export const setProducts = (products: Product[]): ProductsAction => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});
