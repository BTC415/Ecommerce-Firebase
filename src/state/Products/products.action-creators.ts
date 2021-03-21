//importing types
import { ActionType } from './products.action-types';
import { Products, ProductData } from '../interfaces';
import { ProductsAction } from './products.actions';
//start action creators
export const addProductStart = (productData: ProductData): ProductsAction => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (
  filterType: string = ''
): ProductsAction => ({
  type: ActionType.FETCH_PRODUCTS_START,
  payload: filterType,
});

export const setProducts = (products: Products): ProductsAction => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});

export const deleteProductStart = (productID: string): ProductsAction => ({
  type: ActionType.DELETE_PRODUCT_START,
  payload: productID,
});
