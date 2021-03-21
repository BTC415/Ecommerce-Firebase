//importing firebase utils
import { db } from '../../firebase/utils';
//importing types
import { FetchProductsParams, Product } from '../interfaces';
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
export const handleFetchProducts = ({
  filterType,
  startAfterDoc,
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
    if (filterType.length > 0)
      collectionRef = collectionRef.where('category', '==', filterType);
    //checking if there is a last doc
    if (startAfterDoc) collectionRef = collectionRef.startAfter(startAfterDoc);
    //getting products
    collectionRef
      .get()
      .then(productsRef => {
        const totalCount = productsRef.size;
        const products = productsRef.docs.map(doc => {
          return {
            ...doc.data(),
            documentId: doc.id,
          };
        });
        resolve({
          products,
          queryDoc: productsRef.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        });
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
