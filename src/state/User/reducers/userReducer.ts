//importing types
import { CurrentUserAction } from '../actions';
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//state interface
interface CurrentUserState {
  currentUser: CurrentUser | null;
  signInSuccess: boolean;
}
//initial state
const initialState: CurrentUserState = {
  currentUser: null,
  signInSuccess: false,
};
//reducer
const userReducer = (
  state: CurrentUserState = initialState,
  action: CurrentUserAction
): CurrentUserState => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case ActionType.SIGN_IN_SUCCESS:
      return { ...state, signInSuccess: true };
    default:
      return state;
  }
};
export default userReducer;
