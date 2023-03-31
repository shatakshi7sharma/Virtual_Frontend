
import { call, put, takeLatest } from 'redux-saga/effects';
import { 
    LIST_DATA_INIT,
    LIST_DATA_SUCCESS,
    LIST_DATA_FAILED 
   } from '../ActionTypes/dashboardActionTypes';
import appviewModel from '../../Services/apiServices';
import { toast } from 'react-toastify';
import { START_LOADER, STOP_LOADER } from "../ActionTypes/loaderActionTypes";

function* ListApi(action) {
    yield put({
      type: START_LOADER
    });
    try {
      const { data, success, message, status } = 
      yield call(appviewModel.sendApiCall, `api/user/video`, action.payload, 'POST');
      data.status = status;
      console.log("data from dash saga", data)
      
      if (success) {
        yield put({
          type: LIST_DATA_SUCCESS,
          payload: {
            entity: data,
          },
        });
        yield put({
          type: STOP_LOADER
        });
        toast.success(message)
      } else {
        yield put({
          type: LIST_DATA_FAILED,
          payload: {
            error: true,
            message: message || 'Error Occured',
          },
        });
        yield put({
          type: STOP_LOADER
        });
        toast.error(message);
      }
  
    } catch (error) {
      yield put({
        type: STOP_LOADER
      });
      toast.error(error);
    }
  }
  
function* dashboardSaga() {
    yield takeLatest(LIST_DATA_INIT, ListApi);
}
  
export default dashboardSaga;  