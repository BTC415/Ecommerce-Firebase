//importing types
import { ActionType } from './user.action-types';
import { CurrentUser } from '../interfaces';
import { Dispatch } from 'redux';
import { CurrentUserAction } from './user.actions';
//importing firebase utils
import { auth, GoogleProvider, handleUserProfile } from '../../firebase/utils';
//action creators
export const emailSignInStart = (email: string, password: string) => ({
  type: ActionType.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user: CurrentUser | null) => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: { user, formError: '', requestError: '' },
});

export const signInError = (formError: string, requestError: string) => ({
  type: ActionType.SIGN_IN_ERROR,
  payload: { user: null, formError, requestError },
});

export const signOutUserStart = () => ({
  type: ActionType.EMAIL_SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: ActionType.SIGN_OUT_SUCCESS,
});

export const signUpStart = (
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
) => ({
  type: ActionType.EMAIL_SIGN_UP_START,
  payload: { displayName, email, password, confirmPassword },
});

export const checkUserSession = () => {
  return {
    type: ActionType.CHECK_USER_SESSION,
  };
};

export const resetAuthForms = () => ({
  type: ActionType.RESET_AUTH_FORMS,
});

export const signUpUser = (
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
) => async (dispatch: Dispatch<CurrentUserAction>) => {
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
  //dispatching errors
  dispatch({
    type: ActionType.SIGN_UP_ERROR,
    payload: {
      status: false,
      err,
    },
  });
  if (err.length > 0) {
    return;
  }
  //submitting and creating user's account
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //saving user to db
    await handleUserProfile(user, { displayName });
    //success
    dispatch({
      type: ActionType.SIGN_UP_SUCCESS,
      payload: {
        status: true,
        err: [],
      },
    });
  } catch (error) {
    dispatch({
      type: ActionType.SIGN_UP_ERROR,
      payload: {
        status: false,
        err: [...err, error.message],
      },
    });
  }
};

export const recoverPassword = (email: string) => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  try {
    //sending instructions on password recovery
    await auth.sendPasswordResetEmail(email, {
      url: 'http://localhost:3000/login',
    });
    //success
    dispatch({
      type: ActionType.PASSWORD_RECOVERY_SUCCESS,
      payload: {
        status: true,
        err: '',
      },
    });
  } catch (err) {
    //error
    dispatch({
      type: ActionType.PASSWORD_RECOVERY_ERROR,
      payload: {
        status: false,
        err: err.message,
      },
    });
  }
};

export const signInWithGoogle = () => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  try {
    //signing in with google
    await auth.signInWithPopup(GoogleProvider);
    //success
    dispatch({
      type: ActionType.SIGN_IN_SUCCESS,
      payload: {
        status: true,
        err: '',
      },
    });
  } catch (err) {
    //error
    dispatch({
      type: ActionType.SIGN_IN_ERROR,
      payload: {
        status: false,
        err: '',
      },
    });
  }
};
