import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { PropsWithRouter } from '../state';
//use Auth hook
export const useAuth = ({
  history,
  children,
}: React.PropsWithChildren<PropsWithRouter>) => {
  //redux state
  const currentUser = useTypedSelector(state => state.user);
  //redirecting user
  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return currentUser;
};
