//importing saga utils
import { takeLatest, call, all } from 'redux-saga/effects';
//importing types & actions
import { ActionType } from './user.action-types';
import { signInSuccess } from './user.action-creators';
import { EmailSignInStartAction } from './user.actions';
//sagas
export function* emailSignIn({
  payload: { email, password },
}: EmailSignInStartAction) {
  yield 2;
}

export function* onEmailSignInStart() {
  yield takeLatest(ActionType.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
