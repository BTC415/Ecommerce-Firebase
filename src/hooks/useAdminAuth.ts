//importing hooks
import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useHistory } from 'react-router-dom';

//custom hook
export const useAdminAuth = () => {
  //redux state & router history
  const history = useHistory();
  const { currentUser } = useTypedSelector(state => state.user);
};
