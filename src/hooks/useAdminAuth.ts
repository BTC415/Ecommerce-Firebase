//importing hooks
import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useHistory } from 'react-router-dom';
import { checkUserIsAdmin } from '../Utils';
//custom hook
export const useAdminAuth = () => {
  //redux state & router history
  const history = useHistory();
  const { currentUser } = useTypedSelector(state => state.user);
  //redirecting if not admin
  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return currentUser;
};
