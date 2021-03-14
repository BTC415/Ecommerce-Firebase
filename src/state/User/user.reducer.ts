//importing types
import { CurrentUserAction } from './user.actions';
import { ActionType } from './user.action-types';
import { CurrentUser } from '../interfaces';
//state interface
export interface UserState {
  currentUser: CurrentUser | null;
  userErrors: string[];
  recoverPasswordSuccess: boolean;
}
//initial state
const initialState: UserState = {
  currentUser: null,
  userErrors: [],
  recoverPasswordSuccess: false,
};
//reducer
const userReducer = (
  state: UserState = initialState,
  action: CurrentUserAction
): UserState => {
  switch (action.type) {
    case ActionType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, userErrors: [] };
    case ActionType.SIGN_OUT_SUCCESS:
      return { ...state, ...initialState };
    case ActionType.USER_ERROR:
      return { ...state, userErrors: action.payload };
    case ActionType.PASSWORD_RECOVERY_SUCCESS:
      return { ...state, recoverPasswordSuccess: action.payload };
    default:
      return state;
  }
};
export default userReducer;
