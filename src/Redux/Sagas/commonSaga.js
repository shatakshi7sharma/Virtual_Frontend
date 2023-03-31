import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import appviewModel from "../../Services/apiServices";
import { START_LOADER, STOP_LOADER } from "../ActionTypes/loaderActionTypes";
import {
    EXPORT_ACTION_INIT,
    EXPORT_ACTION_SUCCESS,
    EXPORT_ACTION_FAILED,

    DELETE_USER_INIT,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,

    BLOCK_UNBLOCK_USER_INIT,
    BLOCK_UNBLOCK_USER_SUCCESS,
    BLOCK_UNBLOCK_USER_FAILED,

    DELETE_POST_INIT,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,

    BLOCK_UNBLOCK_POST_INIT,
    BLOCK_UNBLOCK_POST_SUCCESS,
    BLOCK_UNBLOCK_POST_FAILED,
    TOGGLE_USER_STATUS,
    TOGGLE_POST_STATUS,

    DELETE_MAIL_TEMPLATE_INIT,
    DELETE_MAIL_TEMPLATE_SUCCESS,
    DELETE_MAIL_TEMPLATE_FAILURE,

    REQUEST_MANAGEMENT_ACTIONS_INIT,
    REQUEST_MANAGEMENT_ACTIONS_SUCCESS,
    REQUEST_MANAGEMENT_ACTIONS_FAILURE,

} from "../ActionTypes/commonActionTypes";
import { constants } from "../../constants";

function* handleDeleteUser(action) {

    try {
        const { status, userId } = action.payload;

        const response = yield call(appviewModel.sendApiCall, `admin/api/v1/user-remove-recover?status=${status}&userId=${userId}`, action.payload, 'PATCH');
        if (response.success) {
            response.data.push({ success: response.success });
            yield put({
                type: DELETE_USER_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });

            //toast.success('Password changed successfully!');
        } else {
            yield put({
                type: DELETE_USER_FAILED,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            toast.error(response.message);
        }

    } catch (error) {
        toast.error(error)
    }

}
function* handleBlockUnBlockUser(action) {
    const { isBlocked, userId } = action.payload;
    try {
        let response;
        if (action.payload.type === 'SUB_ADMIN') {
            response = yield call(appviewModel.sendApiCall,
                `admin/api/v1/sub-admin/block-unblock?userId=${userId}&isBlocked=${isBlocked}`, action.payload, 'PATCH');
        } else {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/user-block-unblock?isBlocked=${isBlocked}&userId=${userId}`, action.payload, 'PATCH');
        }

        if (response.success) {
            yield put({
                type: BLOCK_UNBLOCK_USER_SUCCESS,
                payload: {
                    entity: response,
                },
            });

            yield put({
                type: TOGGLE_USER_STATUS,
                payload: {
                    userId, isBlocked
                }
            });
            //toast.success('Password changed successfully!');
        } else {
            yield put({
                type: BLOCK_UNBLOCK_USER_FAILED,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            toast.error(response.message);
        }

    } catch (error) {
        toast.error(error)
    }

}
function* handleDeletePost(action) {

    try {
        const { status, postId } = action.payload;
        const response = yield call(appviewModel.sendApiCall, `admin/api/v1/post-remove-recover?status=${status}&postId=${postId}`, action.payload, 'PATCH');
        if (response.success) {
            yield put({
                type: DELETE_POST_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });

            //toast.success('Password changed successfully!');
        } else {
            yield put({
                type: DELETE_POST_FAILED,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            toast.error(response.message);
        }

    } catch (error) {
        toast.error(error)
    }

}
function* handleBlockUnBlockPost(action) {
    try {
        const { isBlocked, postId } = action.payload;
        const response = yield call(appviewModel.sendApiCall, `admin/api/v1/post-block-unblock?isBlocked=${isBlocked}&postId=${postId}`, action.payload, 'PATCH');
        if (response.success) {
            yield put({
                type: BLOCK_UNBLOCK_POST_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });
            yield put({
                type: TOGGLE_POST_STATUS,
                payload: {
                    postId, isBlocked
                }
            });
            //toast.success('Password changed successfully!');
        } else {
            yield put({
                type: BLOCK_UNBLOCK_POST_FAILED,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            toast.error(response.message);
        }

    } catch (error) {
        toast.error(error)
    }

}
function* handleDeleteMailTemplate(action) {

    try {
        const { templateId } = action.payload;
        const response = yield call(appviewModel.sendApiCall,
            `admin/api/v1/email/template?templateId=${templateId}`, action.payload, 'DELETE');
        if (response.success) {
            yield put({
                type: DELETE_MAIL_TEMPLATE_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });

            //toast.success('Password changed successfully!');
        } else {
            yield put({
                type: DELETE_MAIL_TEMPLATE_FAILURE,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            toast.error(response.message);
        }

    } catch (error) {
        toast.error(error)
    }

}
function* handleExportData(action) {
    yield put({
        type: START_LOADER
    });
    try {
        let response = null;
        if (action.payload.listType === constants.exportTypes.userListType) {
            delete action.payload.listType;
            const { age, gender, institution, page, limit, search, typeOfUser } = action.payload;
            response = yield call(appviewModel.sendApiCall, `/admin/api/v1/registered-users?page=${page}&limit=${limit}&search=${search}&institution=${institution}&typeOfUser=${typeOfUser}&age=${age}&gender=${gender}`, action.payload, 'GET');
        }
        else if (action.payload.listType === constants.exportTypes.userPostListType) {
            delete action.payload.listType;
            const { userId, search, postType, flair, date, page, limit } = action.payload;
            response = yield call(appviewModel.sendApiCall,
                `admin/api/v1/user-posts-details?userId=${userId}&limit=${limit || 10}&page=${page || 1}&search=${search || ''}&postType=${postType}&flair=${flair || ''}&date=${date || ''}`,
                action.payload, 'GET');
        }
        else if (action.payload.listType === constants.exportTypes.universityListType) {
            delete action.payload.listType;
            const { page, limit, search, filterBy } = action.payload;
            const url = `page=${page}&limit=${limit}&search=${search}&filterBy=${filterBy}`
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/institutions-ranking?${url}`, action.payload, 'GET');
        }
        else if (action.payload.listType === constants.exportTypes.violationPostListType) {
            delete action.payload.listType;
            const { page, limit, search, postType, flair, date } = action.payload;
            const url = `page=${page}&limit=${limit}&search=${search}&postType=${postType}&flair=${flair}&date=${date}`
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/violation-posts-list?${url}`, action.payload, 'GET');
        }
        else if (action.payload.listType === constants.exportTypes.violationUserListType) {
            delete action.payload.listType;
            const { search, institution, userType, page, limit } = action.payload;
            response = yield call(appviewModel.sendApiCall,
                `admin/api/v1/violation-users-list?page=${page || 1}&limit=${limit || 10}&search=${search || ''}&institution=${institution || ''}&typeOfUser=${userType}`,
                action.payload, 'GET');
        }
        if (response.success) {
            yield put({
                type: EXPORT_ACTION_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });
            yield put({
                type: STOP_LOADER
            });
        } else {
            yield put({
                type: EXPORT_ACTION_FAILED,
                payload: {
                    entity: response.data,
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            yield put({
                type: STOP_LOADER
            });
            toast.error(response.message);
        }

    } catch (error) {
        yield put({
            type: STOP_LOADER
        });
        toast.error(error);
    }
}
function* handleRequestManagementAction(action) {

    yield put({
        type: START_LOADER
    });
    try {
        let response = null;
        if (action.payload.listType === constants.requestManagementActionTypes.massEmailApprove) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/mass-email-requests-approve`, { requestId: action.payload.requestId }, 'POST');
        }
        else if (action.payload.listType === constants.requestManagementActionTypes.massEmailDecline) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/mass-email-requests-decline`, { requestId: action.payload.requestId }, 'PATCH');
        }
        else if (action.payload.listType === constants.requestManagementActionTypes.userApprove) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/users-requests-accept`, { requestId: action.payload.requestId }, 'PATCH');
        }
        else if (action.payload.listType === constants.requestManagementActionTypes.userDecline) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/posts-requests-decline`, { requestId: action.payload.requestId }, 'PATCH');
        }
        else if (action.payload.listType === constants.requestManagementActionTypes.postApprove) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/posts-requests-accept`, { requestId: action.payload.requestId }, 'PATCH');
        }
        else if (action.payload.listType === constants.requestManagementActionTypes.postDecline) {
            response = yield call(appviewModel.sendApiCall, `admin/api/v1/posts-requests-decline`, { requestId: action.payload.requestId }, 'PATCH');
        }

        if (response.success) {
            yield put({
                type: REQUEST_MANAGEMENT_ACTIONS_SUCCESS,
                payload: {
                    entity: response.data,
                },
            });
            yield put({
                type: STOP_LOADER
            });
        } else {
            yield put({
                type: REQUEST_MANAGEMENT_ACTIONS_FAILURE,
                payload: {
                    error: true,
                    message: response.message || 'Error Occured',
                },
            });
            yield put({
                type: STOP_LOADER
            });
            toast.error(response.message);
        }

    } catch (error) {
        yield put({
            type: STOP_LOADER
        });
        toast.error(error)
    }

}
function* commonSaga() {
    yield takeLatest(DELETE_USER_INIT, handleDeleteUser);
    yield takeLatest(BLOCK_UNBLOCK_USER_INIT, handleBlockUnBlockUser);
    yield takeLatest(DELETE_POST_INIT, handleDeletePost);
    yield takeLatest(BLOCK_UNBLOCK_POST_INIT, handleBlockUnBlockPost);
    yield takeLatest(DELETE_MAIL_TEMPLATE_INIT, handleDeleteMailTemplate);
    yield takeLatest(EXPORT_ACTION_INIT, handleExportData);
    yield takeLatest(REQUEST_MANAGEMENT_ACTIONS_INIT, handleRequestManagementAction);
}
export default commonSaga;
