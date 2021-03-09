//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../interfaces';
//state type
type CurrentUserState = CurrentUser | null;
//reducer
const userReducer = (state: CurrentUserState = null, action: any) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
