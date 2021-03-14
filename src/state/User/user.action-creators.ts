//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword, UserCredentials } from '../interfaces';
//importing firebase utils
import { CurrentUserAction } from './user.actions';
//action creators
export const emailSignInStart = (
  userCredentials: EmailPassword
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignOutStart = (): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_OUT_START,
});

export const signOutSuccess = (): CurrentUserAction => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: null,
});

export const emailSignUpStart = (
  userCredentials: UserCredentials
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_UP_SUCCESS,
  payload: user,
});

export const checkUserSession = (): CurrentUserAction => ({
  type: ActionType.CHECK_USER_SESSION,
});

export const recoverPasswordStart = (email: string): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_START,
  payload: email,
});

export const recoverPasswordSuccess = (): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_SUCCESS,
  payload: true,
});

export const userError = (err: string[]) => ({
  type: ActionType.USER_ERROR,
  payload: err,
});

export const googleSignInStart = (): CurrentUserAction => ({
  type: ActionType.GOOGLE_SIGN_IN_START,
});

export const googleSignSuccess = (
  user: CurrentUser | null
): CurrentUserAction => ({
  type: ActionType.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});
