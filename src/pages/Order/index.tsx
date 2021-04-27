//importing hooks
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useOrdersActions, useTypedSelector } from '../../hooks';
//order
const Order = () => {
  //redux actions, router params
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderDetailsStart } = useOrdersActions();
  const { orderDetails } = useTypedSelector(state => state.orders);
  //fetching order details
  useEffect(() => {
    getOrderDetailsStart(orderId);
  }, [getOrderDetailsStart, orderId]);
  //destructuring
  if (!orderDetails) return null;
  const { orderTotal } = orderDetails;
  return (
    <div>
      <h1>Order ID: #{orderId}</h1>
      <h3>Total: {orderTotal}</h3>
    </div>
  );
};

export default Order;
