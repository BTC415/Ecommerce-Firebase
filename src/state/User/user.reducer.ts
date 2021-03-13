//importing types
import { CurrentUserAction } from './user.actions';
import { ActionType } from './user.action-types';
import { CurrentUser } from '../interfaces';
//state interface
export interface UserState {
  formError: string;
  requestError: string;
  currentUser: CurrentUser | null;
}
//initial state
const initialState: UserState = {
  currentUser: null,
  formError: '',
  requestError: '',
};
//reducer
const userReducer = (
  state: UserState = initialState,
  action: CurrentUserAction
): UserState => {
  switch (action.type) {
    //destructuring
    case ActionType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload.user };
    case ActionType.SIGN_IN_ERROR:
      return {
        ...state,
        formError: action.payload.formError,
        requestError: action.payload.requestError,
      };
    default:
      return state;
  }
};
export default userReducer;
