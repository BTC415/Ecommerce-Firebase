//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types & actions
import { ActionType } from './user.action-types';
import {
  EmailSignInStartAction,
  EmailSignUpStartAction,
  PasswordRecoveryStartAction,
} from './user.actions';
import { userAuth } from '../types';
import {
  signOutSuccess,
  userError,
  recoverPasswordSuccess,
} from './user.action-creators';
//importing firebase utils & helpers
import { auth, getCurrentUser, GoogleProvider } from '../../firebase/utils';
import { getSnaphotFromUserAuth, handleResetPasswordAPI } from './user.helpers';

// worker sagas
export function* emailSignIn({
  payload: { email, password },
}: EmailSignInStartAction) {
  //signing user in
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //success
    yield getSnaphotFromUserAuth(user);
  } catch (err) {
    //errors
    yield put(userError([err.message]));
  }
}

export function* emailSignOut() {
  //signing out user
  try {
    yield auth.signOut();
    //success
    yield put(signOutSuccess());
  } catch (err) {
    //error
    console.log(err.message);
  }
}

export function* emailSignUp({
  payload: { email, password, confirmPassword, displayName },
}: EmailSignUpStartAction) {
  //validation
  const err: string[] = [];
  if (password !== confirmPassword) {
    err.push("Passwords didn't match. Please try again");
  }
  if (password.length < 6) {
    err.push('Password length must be at least 6 characters');
  }
  if (password.length > 15) {
    err.push('Password length must not exceed 15 characters');
  }
  if (!password || !displayName || !email || !confirmPassword) {
    err.push('One or more fields are missing. Please try again');
  }
  //errors
  yield put(userError(err));
  //stopping execution if errors
  if (err.length > 0) {
    return;
  }
  //submitting and creating user's account
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    //saving user to db
    yield getSnaphotFromUserAuth(user, { displayName });
  } catch (error) {
    //errors
    yield put(userError([...err, error.message]));
  }
}

export function* isUserAuthenticated() {
  try {
    //saving user auth status
    const userAuth: userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnaphotFromUserAuth(userAuth);
  } catch (err) {
    console.log(err.message);
  }
}

export function* recoverPassword({ payload }: PasswordRecoveryStartAction) {
  try {
    //resetting password
    yield call(handleResetPasswordAPI, payload);
    //Success
    yield put(recoverPasswordSuccess());
  } catch (err) {
    //errors
    yield put(userError(err));
  }
}

export function* googleSignIn() {
  try {
    //signing with google
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    //success
    yield getSnaphotFromUserAuth(user);
  } catch (err) {
    console.log(err.message);
  }
}

//start sagas

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

export function* onGoogleSignInStart() {
  yield takeLatest(ActionType.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onRecoverPasswordStart() {
  yield takeLatest(ActionType.PASSWORD_RECOVERY_START, recoverPassword);
}

//global saga

export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onEmailSignOutStart),
    call(onEmailSignUpStart),
    call(onRecoverPasswordStart),
    call(onGoogleSignInStart),
  ]);
}
