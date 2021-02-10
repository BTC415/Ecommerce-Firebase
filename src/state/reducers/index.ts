import { combineReducers } from 'redux';

const reducers = combineReducers({
  dummyReducer: () => 5,
});
export default reducers;
//ensuring that typescript knows the type of our state
export type RootState = ReturnType<typeof reducers>;
