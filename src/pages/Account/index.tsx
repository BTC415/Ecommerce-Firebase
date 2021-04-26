//importing hooks
import { useEffect } from 'react';
import OrderHistory from '../../components/OrderHistory';
import { useTypedSelector, useOrdersActions } from '../../hooks';
//account
const Account = () => {
  //redux state & actions
  const { currentUser } = useTypedSelector(state => state.user);
  const { orderHistory } = useTypedSelector(state => state.orders);
  const { getOrderHistoryStart } = useOrdersActions();
  //fetching order history
  useEffect(() => {
    if (currentUser) getOrderHistoryStart(currentUser.id);
  }, [getOrderHistoryStart, currentUser]);

  return (
    <div>
      <h1>Order History</h1>
      <OrderHistory orders={orderHistory} />
    </div>
  );
};

export default Account;
