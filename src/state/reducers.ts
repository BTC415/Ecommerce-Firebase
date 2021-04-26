//importing reducers
import { combineReducers } from 'redux';
import cartReducer from './Cart/cart.reducer';
import productsReducer from './Products/products.reducer';
import userReducer from './User/user.reducer';
import { persistReducer } from 'redux-persist';
//importing local storage
import storage from 'redux-persist/lib/storage';
import ordersReducer from './Orders/orders.reducer';
//reducers
const reducers = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
//config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
export default persistReducer(persistConfig, reducers);
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
