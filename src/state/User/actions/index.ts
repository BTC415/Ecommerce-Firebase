//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//action type
export type CurrentUserAction =
  | SetCurrentUserAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignUpErrorAction
  | SignUpSuccessAction
  | SignUpSuccessAction
  | PassworsRecoveryErrorAction
  | PassworsRecoverySuccessAction;
//action interfaces
interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: CurrentUser | null;
}
interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: {
    status: boolean;
    err: string;
  };
}
interface SignInErrorAction {
  type: ActionType.SIGN_IN_ERROR;
  payload: {
    status: boolean;
    err: string;
  };
}
interface SignUpSuccessAction {
  type: ActionType.SIGN_UP_SUCCESS;
  payload: {
    status: boolean;
    err: string[];
  };
}
interface SignUpErrorAction {
  type: ActionType.SIGN_UP_ERROR;
  payload: {
    status: boolean;
    err: string[];
  };
}
interface PassworsRecoverySuccessAction {
  type: ActionType.PASSWORD_RECOVERY_SUCCESS;
  payload: {
    status: boolean;
    err: string;
  };
}
interface PassworsRecoveryErrorAction {
  type: ActionType.PASSWORD_RECOVERY_ERROR;
  payload: {
    status: boolean;
    err: string;
  };
}
