//importing types
import { ActionType } from './products.action-types';
import { Products, ProductData } from '../interfaces';
import { ProductsAction } from './products.actions';
import { doc } from '../types';
//start action creators
export const addProductStart = (productData: ProductData): ProductsAction => ({
  type: ActionType.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (
  filterType: string = '',
  startAfterDoc?: doc,
  persistProducts: ProductData[] = []
): ProductsAction => ({
  type: ActionType.FETCH_PRODUCTS_START,
  payload: { filterType, startAfterDoc, persistProducts },
});

export const fetchProductStart = (productID: string): ProductsAction => ({
  type: ActionType.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProducts = (products: Products): ProductsAction => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});
export const setProduct = (product: ProductData): ProductsAction => ({
  type: ActionType.SET_PRODUCT,
  payload: product,
});

export const deleteProductStart = (productID: string): ProductsAction => ({
  type: ActionType.DELETE_PRODUCT_START,
  payload: productID,
});
