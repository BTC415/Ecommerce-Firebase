//importing types
import { Products } from '../interfaces';
import { ActionType } from './products.action-types';
import { ProductsAction } from './products.actions';
//state interface
interface ProductsState {
  products: Products;
}
//initial state
const initialState: ProductsState = {
  products: {
    data: [],
    isLastPage: false,
    queryDoc: null,
  },
};
//reducer
const productsReducer = (
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
export default productsReducer;
