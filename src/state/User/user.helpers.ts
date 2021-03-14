//importing saga utils
import { call, put } from 'redux-saga/effects';
//importing types & actions
import { signInSuccess } from './user.action-creators';
import { userRefType, userData, userAuth } from '../types';
//importing firebase utils
import { auth, handleUserProfile } from '../../firebase/utils';

//save user to db helper
export function* getSnaphotFromUserAuth(user: userAuth, moreData?: any) {
  try {
    //getting currentUser object
    const userRef: userRefType = yield call(handleUserProfile, {
      userAuth: user,
      moreData,
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
    console.log(err.message);
  }
}

//reset password helper
export const handleResetPasswordAPI = (email: string) => {
  const config = {
    url: 'https://localhost:3000/login',
  };
  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve('success');
      })
      .catch(() => reject(['Email not found. Please try again.']));
  });
};
