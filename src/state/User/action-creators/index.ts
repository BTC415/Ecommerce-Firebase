//importing types
import { ActionType } from '../action-types';
import { CurrentUser, EmailPassword } from '../../interfaces';
import { Dispatch } from 'react';
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
export const signInUser = ({ email, password }: EmailPassword) => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  //signing user in
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {}
};
