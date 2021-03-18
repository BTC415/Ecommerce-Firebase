//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types
import { ActionType } from './products.action-types';
import { AddProductStartAction, DeleteProductStart } from './products.actions';
import { Product } from '../interfaces';
//importing helpers & fierbase utils
import { auth } from '../../firebase/utils';
import { handleAddProduct, handleFetchProducts } from './products.helpers';
//importing actions
import { fetchProductsStart, setProducts } from './products.action-creators';
//sagas
export function* addProduct({
  payload: { category, name, price, thumbnail },
}: AddProductStartAction) {
  try {
    const timeStamp = new Date();
    if (auth.currentUser) {
      //adding product to firestore
      yield handleAddProduct({
        category,
        name,
        price,
        thumbnail,
        createdDate: timeStamp,
        productAdminUserUID: auth.currentUser.uid,
      });
      //fetching products (success)
      yield put(fetchProductsStart());
    }
  } catch (err) {
    //TODO ERROR
  }
}

export function* fetchProducts() {
  try {
    //fetching products
    const products: Product[] = yield handleFetchProducts();
    //success
    yield put(setProducts(products));
  } catch (err) {
    //TODO ERROR
  }
}

export function* deleteProduct({ payload }: DeleteProductStart) {
  try {
  } catch (err) {
    //TODO ERROR
  }
}
//start sagas

export function* onProductAddStart() {
  yield takeLatest(ActionType.ADD_NEW_PRODUCT_START, addProduct);
}

export function* onFetchProductsStart() {
  yield takeLatest(ActionType.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onDeleteProductStart() {
  yield takeLatest(ActionType.DELETE_PRODUCT_START, deleteProduct);
}
//global saga

export default function* productsSagas() {
  yield all([call(onProductAddStart), call(onFetchProductsStart)]);
}
