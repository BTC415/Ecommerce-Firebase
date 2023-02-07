import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import saga from './saga';
import { persistStore } from 'redux-persist';
//getting typescript to work with devtools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
//saga middleware
const sagaMiddleware = createSagaMiddleware();
//redux dev tools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux store
export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

//redux persist
export const persistor = persistStore(store);
//running redux saga
sagaMiddleware.run(saga);
