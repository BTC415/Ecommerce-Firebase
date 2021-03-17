//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { Product } from '../interfaces';
//adding products helper
export const handleAddProduct = (product: Product) => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .doc()
      .set(product)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
//fetching products helper
export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .get()
      .then(productsRef => {
        const products = productsRef.docs.map(doc => {
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
