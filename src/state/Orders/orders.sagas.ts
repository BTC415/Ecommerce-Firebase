//importing saga utils
import { takeLatest, put, all, call } from 'redux-saga/effects';
//importing types
import { ActionType } from './orders.action-types';
import { SaveOrderHistoryStartAction } from './orders.actions';
//sagas
export function* saveOrder({ payload }: SaveOrderHistoryStartAction) {}

//start sagas
export function* onSaveOrderHistoryStart() {
  yield takeLatest(ActionType.SAVE_ORDER_HISTORY_START, saveOrder);
}

//global saga
export default function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart)]);
}
