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

export const handleGetOrderHistory = (uid: string) => {
  return new Promise((resolve, reject) => {
    //ordering orders
    let ordersRef = db.collection('orders').orderBy('orderCreatedDate');
    ordersRef = ordersRef.where('orderUserId', '==', uid);
    //getting orders
    ordersRef
      .get()
      .then(snapshot => {
        const data = [
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentId: doc.id,
            };
          }),
        ];
        resolve(data);
      })
      .catch(err => reject(err));
  });
};
