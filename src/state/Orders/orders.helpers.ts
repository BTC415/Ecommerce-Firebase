//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { Order } from '../../interfaces';
//helpers
export const handleSaveOrder = (order: Order) => {
  return new Promise((resolve, reject) => {
    db.collection('orders')
      .doc()
      .set(order)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
