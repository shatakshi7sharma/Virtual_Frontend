import { fork } from '@redux-saga/core/effects';
import authSaga from './authSaga';
import commonSaga from './commonSaga';
import dashboardSaga from './dashboardSaga';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(commonSaga)
  yield fork(dashboardSaga)

}
