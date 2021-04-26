//importing utils
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { clearCart } from '../Cart/cart.action-creators';
//importing types
import { ActionType } from './orders.action-types';
import { SaveOrderHistoryStartAction } from './orders.actions';
import { handleSaveOrder } from './orders.helpers';
//sagass
export function* saveOrder({ payload }: SaveOrderHistoryStartAction) {
  try {
    const timeStamp = new Date();
    //saving orders
    yield handleSaveOrder({
      ...payload,
      orderUserId: auth.currentUser?.uid,
      orderCreatedDate: timeStamp,
    });
    //clearing out cart
    yield put(clearCart());
    //success
  } catch (err) {
    console.log(err.message);
  }
}

//start sagas
export function* onSaveOrderHistoryStart() {
  yield takeLatest(ActionType.SAVE_ORDER_HISTORY_START, saveOrder);
}

//global saga
export default function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart)]);
}
