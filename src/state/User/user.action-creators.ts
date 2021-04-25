//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword, UserCredentials } from '../../interfaces';
//importing firebase utils
import { CurrentUserAction } from './user.actions';
//start action creators
export const emailSignInStart = (
  userCredentials: EmailPassword
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const emailSignOutStart = (): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_OUT_START,
});

export const emailSignUpStart = (
  userCredentials: UserCredentials
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_UP_START,
  payload: userCredentials,
});

export const recoverPasswordStart = (email: string): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_START,
  payload: email,
});

export const googleSignInStart = (): CurrentUserAction => ({
  type: ActionType.GOOGLE_SIGN_IN_START,
});

//success action creators

export const signInSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signOutSuccess = (): CurrentUserAction => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: null,
});

export const signUpSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_UP_SUCCESS,
  payload: user,
});

export const recoverPasswordSuccess = (): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_SUCCESS,
  payload: true,
});

export const googleSignSuccess = (
  user: CurrentUser | null
): CurrentUserAction => ({
  type: ActionType.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

//error action creators

export const userError = (err: string[]) => ({
  type: ActionType.USER_ERROR,
  payload: err,
});

//other

export const checkUserSession = (): CurrentUserAction => ({
  type: ActionType.CHECK_USER_SESSION,
});

export const resetUserState = (): CurrentUserAction => ({
  type: ActionType.RESET_USER_STATE,
});
