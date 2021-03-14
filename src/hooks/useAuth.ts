import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useHistory } from 'react-router-dom';
//use Auth hook
export const useAuth = () => {
  //redux state & router history
  const history = useHistory();
  const currentUser = useTypedSelector(state => state.user);
  //redirecting user
  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return currentUser;
};
