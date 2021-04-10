//importing saga utils
import { takeLatest, call, all, put } from 'redux-saga/effects';
//importing types
import { ActionType } from './products.action-types';
import {
  AddProductStartAction,
  DeleteProductStart,
  FetchProductsStartAction,
  FetchProductStartAction,
} from './products.actions';
import { ProductData, Products } from '../interfaces';
//importing helpers & fierbase utils
import { auth } from '../../firebase/utils';
import {
  handleAddProduct,
  handleDeleteProduct,
  handleFetchProduct,
  handleFetchProducts,
} from './products.helpers';
//importing actions
import {
  fetchProductsStart,
  setProduct,
  setProducts,
} from './products.action-creators';
//sagas
export function* addProduct({
  payload: { name, category, price, thumbnail },
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
    console.log(err.message);
  }
}

export function* fetchProducts({ payload }: FetchProductsStartAction) {
  let filterType = payload;
  try {
    //fetching products
    const products: Products = yield handleFetchProducts(filterType);
    //success
    yield put(setProducts(products));
  } catch (err) {
    console.log(err.message);
  }
}

export function* deleteProduct({ payload }: DeleteProductStart) {
  try {
    //deleting product
    yield handleDeleteProduct(payload);
    //success
    yield put(fetchProductsStart(payload));
  } catch (err) {
    console.log(err.message);
  }
}

export function* fetchProduct({ payload }: FetchProductStartAction) {
  try {
    //fetching product
    const product: ProductData = yield handleFetchProduct(payload);
    //success
    yield put(setProduct(product));
  } catch (err) {
    console.log(err.message);
  }
}
//start sagas

export function* onProductAddStart() {
  yield takeLatest(ActionType.ADD_NEW_PRODUCT_START, addProduct);
}

export function* onFetchProductsStart() {
  yield takeLatest(ActionType.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onFetchProductStart() {
  yield takeLatest(ActionType.FETCH_PRODUCT_START, fetchProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(ActionType.DELETE_PRODUCT_START, deleteProduct);
}

//global saga

export default function* productsSagas() {
  yield all([
    call(onProductAddStart),
    call(onFetchProductsStart),
    call(onFetchProductStart),
    call(onDeleteProductStart),
  ]);
}
