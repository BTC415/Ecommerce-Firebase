//importing types
import { Product } from '../interfaces';
import { ActionType } from './products.action-types';
import { ProductsAction } from './products.actions';
//state interface
interface ProductsState {
  products: Product[];
}
//initial state
const initialState: ProductsState = {
  products: [],
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
