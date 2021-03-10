//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../../interfaces';
import { Dispatch } from 'redux';
import { CurrentUserAction } from '../actions';
//importing firebase utils
import { auth } from '../../../firebase/utils';
//action creators
export const setCurrentUser = (user: CurrentUser | null) => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
export const signInUser = (email: string, password: string) => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  //signing user in
  try {
    await auth.signInWithEmailAndPassword(email, password);
    //sign in sucess
    dispatch({
      type: ActionType.SIGN_IN_SUCCESS,
      payload: true,
    });
  } catch (err) {
    //sign in error
    dispatch({
      type: ActionType.SIGN_IN_ERROR,
      payload: false,
    });
  }
};
