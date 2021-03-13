//importing types
import { CurrentUserAction } from './user.actions';
import { ActionType } from './user.action-types';
import { CurrentUser } from '../interfaces';
//state interface
export interface UserState {
  currentUser: CurrentUser | null;
  userErrors: string[];
}
//initial state
const initialState: UserState = {
  currentUser: null,
  userErrors: [],
};
//reducer
const userReducer = (
  state: UserState = initialState,
  action: CurrentUserAction
): UserState => {
  switch (action.type) {
    //destructuring
    case ActionType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, userErrors: [] };
    case ActionType.SIGN_OUT_SUCCESS:
      return { ...state, ...initialState };
    case ActionType.USER_ERROR:
      return { ...state, userErrors: action.payload };
    default:
      return state;
  }
};
export default userReducer;
