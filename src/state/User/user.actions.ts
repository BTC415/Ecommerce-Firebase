//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword, UserCredentials } from '../interfaces';
//action type
export type CurrentUserAction =
  | SignInSuccessAction
  | SignUpSuccessAction
  | PasswordRecoverySuccessAction
  | ResetAuthForms
  | SignOutSuccessAction
  | EmailSignInStartAction
  | EmailSignUpStartAction
  | EmailSignOutStartAction
  | CheckUserSessionAction
  | PasswordRecoveryStartAction
  | UserErrorsAction;
//action interfaces
export interface EmailSignInStartAction {
  type: ActionType.EMAIL_SIGN_IN_START;
  payload: EmailPassword;
}
export interface EmailSignUpStartAction {
  type: ActionType.EMAIL_SIGN_UP_START;
  payload: UserCredentials;
}
interface EmailSignOutStartAction {
  type: ActionType.EMAIL_SIGN_OUT_START;
}
export interface PasswordRecoveryStartAction {
  type: ActionType.PASSWORD_RECOVERY_START;
  payload: string;
}
interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: CurrentUser | null;
}
export interface SignOutSuccessAction {
  type: ActionType.SIGN_OUT_SUCCESS;
  payload: CurrentUser | null;
}

interface SignUpSuccessAction {
  type: ActionType.SIGN_UP_SUCCESS;
  payload: CurrentUser | null;
}
interface PasswordRecoverySuccessAction {
  type: ActionType.PASSWORD_RECOVERY_SUCCESS;
}
interface ResetAuthForms {
  type: ActionType.RESET_AUTH_FORMS;
}
interface CheckUserSessionAction {
  type: ActionType.CHECK_USER_SESSION;
}
interface UserErrorsAction {
  type: ActionType.USER_ERROR;
  payload: string[];
}
