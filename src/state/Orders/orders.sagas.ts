//importing utils
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { clearCart } from '../Cart/cart.action-creators';
import { setOrderDetails, setOrderHistory } from './orders.action-creators';
//importing types
import { ActionType } from './orders.action-types';
import {
  GetOrderDetailsStartAction,
  GetOrderHistoryStartAction,
  SaveOrderHistoryStartAction,
} from './orders.actions';
import { Order } from '../../interfaces';
import {
  handleGetOrder,
  handleGetOrderHistory,
  handleSaveOrder,
} from './orders.helpers';
//sagas
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
  } catch (err) {
    console.log(err.message);
  }
}

export function* getOrderHistory({ payload }: GetOrderHistoryStartAction) {
  try {
    //getting history
    const history: Order[] = yield handleGetOrderHistory(payload);
    //success
    yield put(setOrderHistory(history));
  } catch (err) {
    console.log(err.message);
  }
}

export function* getOrderDetails({ payload }: GetOrderDetailsStartAction) {
  try {
    //getting order
    const order: Order = yield handleGetOrder(payload);
    //success
    yield put(setOrderDetails(order));
  } catch (err) {
    console.log(err.message);
  }
}

//start sagas
function* onSaveOrderHistoryStart() {
  yield takeLatest(ActionType.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* onGetOrderHistoryStart() {
  yield takeLatest(ActionType.GET_ORDER_HISTORY_START, getOrderHistory);
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ActionType.GET_ORDER_DETAILS_START, getOrderDetails);
}
//global saga
export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetOrderHistoryStart),
    call(onGetOrderDetailsStart),
  ]);
}
