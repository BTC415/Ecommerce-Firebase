//importing types
import { ProductData, Products } from '../interfaces';
import { ActionType } from './products.action-types';
import { ProductsAction } from './products.actions';
//state interface
interface ProductsState {
  products: Products;
  product: ProductData | null;
}
//initial state
const initialState: ProductsState = {
  products: {
    data: [],
    isLastPage: false,
    queryDoc: null,
  },
  product: null,
};
//reducer
const productsReducer = (
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionType.SET_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
export default productsReducer;
