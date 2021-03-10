import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useTypedSelector } from './useTypedSelector';
//props
export interface Props extends RouteComponentProps<any> {}
//use Auth hook
export const useAuth = ({
  history,
  children,
}: React.PropsWithChildren<Props>) => {
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
