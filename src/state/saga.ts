//importing saga utils
import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas';
//root saga
export default function* rootSaga() {
  yield all([call(userSagas)]);
}
