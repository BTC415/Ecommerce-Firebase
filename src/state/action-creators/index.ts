//importing types
import { ActionType } from '../action-types';
import { CurrentUser } from '../interfaces';
//action creators
export const setCurrentUser = (user: CurrentUser | null) => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
