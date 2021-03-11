//importing reducers
import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
//reducers
const reducers = combineReducers({
  user: userReducer,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
