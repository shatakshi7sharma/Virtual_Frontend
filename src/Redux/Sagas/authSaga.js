
import { call, put, takeLatest } from 'redux-saga/effects';
import { 
    LOGIN_INIT, 
    LOGIN_SUCCESS,
    LOGIN_FAILED, 
    // CHANGE_PASSWORD_SUCCESS, 
    // CHANGE_PASSWORD_FAILED,
    // CHANGE_PASSWORD_INIT, 
    // FORGOT_PASSWORD_INIT,
    // FORGOT_PASSWORD_SUCCESS, 
    // FORGOT_PASSWORD_FAILED, 
    // LOGOUT_SUCCESS, 
    // LOGOUT_INIT, 
    // VERIFY_TOKEN_INIT, 
    // VERIFY_TOKEN_SUCCESS, 
    // VERIFY_TOKEN_FAILED, 
    // RESET_PASSWORD_SUCCESS,
    // RESET_PASSWORD_FAILURE, 
    // RESET_PASSWORD_INIT
   } from '../ActionTypes/authActionTypes';
import appviewModel from '../../Services/apiServices';
import { removeCookie, setCookie } from '../../Services/cookies';
import { toast } from 'react-toastify';
import { START_LOADER, STOP_LOADER } from "../ActionTypes/loaderActionTypes";
// import { getApiUrls, putApiUrls } from '../../Pages/shared/apiUrls';


function* Login(action) {
  yield put({
    type: START_LOADER
  });
  try {
    const { data, success, message, status } = yield call(appviewModel.sendApiCall, 'api/user/login', action.payload, 'POST');
    data.status = status;
    console.log("data from auth saga", data)
    const obj = {
      token: data?.access_token,
      userId: data?.user_id,
      email: data?.email,
      refresh_token: data?.refresh_token,
    };
    setCookie('hype', JSON.stringify(obj), '/');
    if (success) {
      yield put({
        type: LOGIN_SUCCESS,
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
        type: LOGIN_FAILED,
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

// function* handleChangePassword(action) {
//   yield put({
//     type: START_LOADER
//   });
//   try {
//     const { data } = yield call(appviewModel.sendApiCall, 'admin/api/v1/change-password', action.payload, 'POST');
//     if (data) {
//       yield put({
//         type: CHANGE_PASSWORD_SUCCESS,
//         payload: {
//           entity: data,
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.success('Password changed successfully!');
//     } else {
//       yield put({
//         type: CHANGE_PASSWORD_FAILED,
//         payload: {
//           error: true,
//           message: data?.message || 'Error Occured',
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.error('Current password is incorrect');
//     }

//   } catch (error) {
//     yield put({
//       type: STOP_LOADER
//     });
//     toast.error(error);
//   }
// }

// function* handleForgotPassword(action) {
//   yield put({
//     type: START_LOADER
//   });
//   try {
//     const response = yield call(appviewModel.sendApiCall, 'auth/api/v1/forgot-password', action.payload, 'POST');
//     if (response.success) {
//       yield put({
//         type: FORGOT_PASSWORD_SUCCESS,
//         payload: {
//           entity: response,
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.success(response.message);
//     } else {
//       yield put({
//         type: FORGOT_PASSWORD_FAILED,
//         payload: {
//           error: true,
//           message: response.message || 'Error Occured',
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.error(response.message);
//     }

//   } catch (error) {
//     yield put({
//       type: STOP_LOADER
//     });
//     toast.error(error);
//   }
// }
// function* handleVerifyToken(action) {
//   yield put({
//     type: START_LOADER
//   });
//   try {
//     const response = yield call(appviewModel.sendApiCall, 'auth/api/v1/verify-token', action.payload, 'POST');
//     if (response.success) {
//       yield put({
//         type: VERIFY_TOKEN_SUCCESS,
//         payload: {
//           entity: response,
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.success(response.message);
//     } else {
//       yield put({
//         type: VERIFY_TOKEN_FAILED,
//         payload: {
//           entity: response,
//           error: true,
//           message: response.message || 'Error Occured',
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.error(response.message);
//     }

//   } catch (error) {
//     yield put({
//       type: STOP_LOADER
//     });
//     toast.error(error);
//   }
// }
// function* handleLogout(action) {
//   removeCookie('hype');
//   toast.success('Logged out successfully', { autoClose: 2000 });
//   yield put({
//     type: LOGOUT_SUCCESS,
//   });
// }
// function* handleResetPassword(action) {
//   yield put({
//     type: START_LOADER
//   });
//   try {
//     const response = yield call(appviewModel.sendApiCall, 'auth/api/v1/reset-password', action.payload, 'POST');
//     if (response.success) {
//       yield put({
//         type: RESET_PASSWORD_SUCCESS,
//         payload: {
//           entity: response,
//         },
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.success(response.message);
//     } else {
//       yield put({
//         type: RESET_PASSWORD_FAILURE,
//       });
//       yield put({
//         type: STOP_LOADER
//       });
//       toast.error(response.message);
//     }

//   } catch (error) {
//     yield put({
//       type: STOP_LOADER
//     });
//     toast.error(error);
//   }
// }

function* authSaga() {
  yield takeLatest(LOGIN_INIT, Login);
  // yield takeLatest(CHANGE_PASSWORD_INIT, handleChangePassword);
  // yield takeLatest(FORGOT_PASSWORD_INIT, handleForgotPassword);
  // yield takeLatest(LOGOUT_INIT, handleLogout);
  // yield takeLatest(RESET_PASSWORD_INIT, handleResetPassword);
  // yield takeLatest(VERIFY_TOKEN_INIT, handleVerifyToken);
}

export default authSaga;

