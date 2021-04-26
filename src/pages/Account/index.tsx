//importing hooks
import { useEffect } from 'react';
import { useTypedSelector, useOrdersActions } from '../../hooks';
//account
const Account = () => {
  //redux state & actions
  const { currentUser } = useTypedSelector(state => state.user);
  const { getOrderHistoryStart } = useOrdersActions();
  //fetching order history
  useEffect(() => {
    if (currentUser) getOrderHistoryStart(currentUser.id);
  }, [getOrderHistoryStart, currentUser]);

  return <div>Account</div>;
};

export default Account;
