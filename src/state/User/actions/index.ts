//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//action type
export type CurrentUserAction = SetCurrentUserAction | SignInSuccessAction;
//action interfaces
interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: CurrentUser | null;
}
interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: boolean;
}
