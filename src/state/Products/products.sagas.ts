//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types
import { ActionType } from './products.action-types';
import { AddProductStartAction } from './products.actions';

//sagas
export function* addProduct({
  payload: { category, name, price, thumbnail },
}: AddProductStartAction) {
  try {
  } catch (err) {
    console.log(err.message);
  }
}

//start sagas

export function* onProductAddStart() {
  yield takeLatest(ActionType.ADD_NEW_PRODUCT_START, addProduct);
}

//global saga

export default function* productsSagas() {
  yield all([call(onProductAddStart)]);
}
