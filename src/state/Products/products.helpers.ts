//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { Product } from '../interfaces';
//helpers
export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentId: doc.id,
          };
        });
        resolve(products);
      })
      .catch(err => reject(err));
  });
};
