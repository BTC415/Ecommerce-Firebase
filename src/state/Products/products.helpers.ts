//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { FetchProductsParams, ProductData } from '../interfaces';
//adding products helper functions
export const handleAddProduct = (product: ProductData) => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .doc()
      .set(product)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
//fetching products helper
export const handleFetchProducts = ({
  filterType,
  startAfterDoc,
  persistProducts,
}: FetchProductsParams) => {
  return new Promise((resolve, reject) => {
    //page size
    const pageSize = 6;
    //collection reference
    let collectionRef = db
      .collection('products')
      .orderBy('createdDate')
      .limit(pageSize);
    //checking if filtertype is valid
    if (filterType && filterType.length > 0)
      collectionRef = collectionRef.where('category', '==', filterType);
    //checking if there is a last doc
    if (startAfterDoc) collectionRef = collectionRef.startAfter(startAfterDoc);
    //getting products
    collectionRef
      .get()
      .then(productsRef => {
        if (persistProducts) {
          const totalCount = productsRef.size;
          const data = [
            ...persistProducts,
            ...productsRef.docs.map(doc => {
              return {
                ...doc.data(),
                documentId: doc.id,
              };
            }),
          ];
          resolve({
            data,
            queryDoc: productsRef.docs[totalCount - 1],
            isLastPage: totalCount < 1,
          });
        }
      })
      .catch(err => reject(err));
  });
};
//fetching product helper
export const handleFetchProduct = (productID: string) => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .doc(productID)
      .get()
      .then(productRef => {
        if (productRef.exists) {
          resolve(productRef.data());
        }
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
