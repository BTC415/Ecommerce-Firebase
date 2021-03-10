//importing types
import { CurrentUserAction } from '../actions';
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//state interface
interface UserState {
  currentUser: CurrentUser | null;
  signInSuccess: boolean;
}
//initial state
const initialState: UserState = {
  currentUser: null,
  signInSuccess: false,
};
//reducer
const userReducer = (
  state: UserState = initialState,
  action: CurrentUserAction
): UserState => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case ActionType.SIGN_IN_SUCCESS:
      return { ...state, signInSuccess: action.payload };
    case ActionType.SIGN_IN_ERROR:
      return { ...state, signInSuccess: action.payload };
    default:
      return state;
  }
};
export default userReducer;
