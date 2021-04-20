//importing reducers
import { combineReducers } from 'redux';
import cartReducer from './Cart/cart.reducer';
import productsReducer from './Products/products.reducer';
import userReducer from './User/user.reducer';
//reducers
const reducers = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cart: cartReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
