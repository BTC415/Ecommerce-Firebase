//importing types
import { CurrentUserAction } from '../actions/userAction';
import { ActionType } from '../action-types';
import { CurrentUser } from '../interfaces';
//state type
type CurrentUserState = CurrentUser | null;
//reducer
const userReducer = (
  state: CurrentUserState = null,
  action: CurrentUserAction
): CurrentUserState => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
