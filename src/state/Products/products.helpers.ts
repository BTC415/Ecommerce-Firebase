//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { Product } from '../interfaces';
//adding products helper functions
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
export const handleFetchProducts = (filterType: string) => {
  return new Promise((resolve, reject) => {
    let collectionRef = db.collection('products').orderBy('createdDate');
    //checking if filtertype is valid
    if (filterType.length > 0)
      collectionRef = collectionRef.where('category', '==', filterType);
    collectionRef
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
//deleting product helper
export const handleDeleteProduct = (productID: string) => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .doc(productID)
      .delete()
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
