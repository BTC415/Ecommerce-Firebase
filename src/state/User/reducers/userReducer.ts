//importing types
import { CurrentUserAction } from '../actions';
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
//state interface
interface UserState {
  currentUser: CurrentUser | null;
  signInSuccess: {
    status: boolean;
    err: string | null;
  };
  signUpSuccess: {
    status: boolean;
    err: string[];
  };
  passwordRecoverySuccess: {
    status: boolean;
    err: string | null;
  };
}
//initial state
const initialState: UserState = {
  currentUser: null,
  signInSuccess: {
    status: false,
    err: null,
  },
  signUpSuccess: {
    status: false,
    err: [],
  },
  passwordRecoverySuccess: {
    status: false,
    err: null,
  },
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
    case ActionType.SIGN_UP_ERROR:
      return { ...state, signUpSuccess: action.payload };
    case ActionType.SIGN_UP_SUCCESS:
      return { ...state, signUpSuccess: action.payload };
    case ActionType.PASSWORD_RECOVERY_SUCCESS:
      return { ...state, passwordRecoverySuccess: action.payload };
    case ActionType.PASSWORD_RECOVERY_ERROR:
      return { ...state, passwordRecoverySuccess: action.payload };

    default:
      return state;
  }
};
export default userReducer;
