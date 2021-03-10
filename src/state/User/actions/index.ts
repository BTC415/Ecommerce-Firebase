//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//action type
export type CurrentUserAction =
  | SetCurrentUserAction
  | SignInSuccessAction
  | SignInErrorAction;
//action interfaces
interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: CurrentUser | null;
}
interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: boolean;
}
interface SignInErrorAction {
  type: ActionType.SIGN_IN_ERROR;
  payload: boolean;
}
