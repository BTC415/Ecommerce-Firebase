//importing saga utils
import { call, put } from 'redux-saga/effects';
//importing types & actions
import { signInError, signInSuccess } from './user.action-creators';
import { userRefType, userData } from '../types';
//importing firebase utils
import { handleUserProfile } from '../../firebase/utils';
import firebase from 'firebase/app';

//helper functions
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
    //errors
    yield put(signInError(err.message, ''));
  }
}
