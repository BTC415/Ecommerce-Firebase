//importing hooks
import { useParams } from 'react-router-dom';
//order
const Order = () => {
  //redux actions, router params
  const { orderId } = useParams<{ orderId: string }>();
  return (
    <div>
      <h1>Order ID: </h1>
    </div>
  );
};

export default Order;
