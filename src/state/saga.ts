//importing saga utils
import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import ordersSagas from './Orders/orders.sagas';
//root saga
export default function* rootSaga() {
  yield all([call(userSagas), call(productsSagas), call(ordersSagas)]);
}
