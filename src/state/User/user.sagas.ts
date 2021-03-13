//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types & actions
import { ActionType } from './user.action-types';
import { signInSuccess } from './user.action-creators';
import { EmailSignInStartAction } from './user.actions';
import { userRefType, userData } from '../types';
//importing firebase utils
import { auth, handleUserProfile } from '../../firebase/utils';
import firebase from 'firebase/app';

export function* getSnaphotFromUserAuth(user: firebase.User | null) {
  //firebase user
  try {
    //getting currentUser object
    const userRef: userRefType = yield call(handleUserProfile, {
      userAuth: user,
    });
    const userData: userData = yield userRef.get();
    //updating state when user changes
    yield put(
      signInSuccess({
        id: userData.id,
        displayName: userData.data()?.displayName,
        email: userData.data()?.email,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
//sagas
export function* emailSignIn({
  payload: { email, password },
}: EmailSignInStartAction) {
  //signing user in
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnaphotFromUserAuth(user);
  } catch (err) {}
}

export function* onEmailSignInStart() {
  yield takeLatest(ActionType.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
