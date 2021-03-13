//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types & actions
import { ActionType } from './user.action-types';
import { EmailSignInStartAction } from './user.actions';
import { userAuth } from '../types';
import { signInError, signOutSuccess } from './user.action-creators';
//importing firebase utils & helpers
import { auth, getCurrentUser } from '../../firebase/utils';
import { getSnaphotFromUserAuth } from './user.helpers';
//sagas
export function* emailSignIn({
  payload: { email, password },
}: EmailSignInStartAction) {
  //signing user in
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnaphotFromUserAuth(user);
  } catch (err) {
    //errors
    yield put(signInError('', err.message));
  }
}

export function* emailSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    console.log(err.message);
  }
}

export function* emailSignUp() {}

export function* isUserAuthenticated() {
  try {
    const userAuth: userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnaphotFromUserAuth(userAuth);
  } catch (err) {
    console.log(err.message);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(ActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(ActionType.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onEmailSignOutStart() {
  yield takeLatest(ActionType.EMAIL_SIGN_OUT_START, emailSignOut);
}

export function* onEmailSignUpStart() {
  yield takeLatest(ActionType.EMAIL_SIGN_UP_START, emailSignUp);
}
export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onEmailSignOutStart),
    call(onEmailSignUpStart),
  ]);
}
