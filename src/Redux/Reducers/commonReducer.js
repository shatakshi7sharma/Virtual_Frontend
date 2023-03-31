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
    EXPORT_ACTION_CLEAR,

    DELETE_MAIL_TEMPLATE_INIT,
    DELETE_MAIL_TEMPLATE_SUCCESS,
    DELETE_MAIL_TEMPLATE_FAILURE,

    REQUEST_MANAGEMENT_ACTIONS_INIT,
    REQUEST_MANAGEMENT_ACTIONS_SUCCESS,
    REQUEST_MANAGEMENT_ACTIONS_FAILURE,

} from "../ActionTypes/commonActionTypes";

export const initialState = {
    exportDataList: null,
    deleteUserData: null,
    blockUnblockUserData: null,
    deletePostData: null,
    blockUnblockPostData: null,
    deleteMailTemplateData: null,
    requestManagementData: null,
};

export default function commonReducer(state = initialState, action) {
    switch (action.type) {

        case EXPORT_ACTION_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case EXPORT_ACTION_SUCCESS:
            return {
                ...state,
                ...action.payload,
                exportDataList: action.payload.entity,
                loading: false,
            };
        case EXPORT_ACTION_FAILED:
            return {
                ...state,
                loading: false,
            };

        case EXPORT_ACTION_CLEAR:
            return {
                ...state,
                exportDataList: null,
            }

        case DELETE_USER_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                deleteUserData: action.payload.entity,
                loading: false,
            };
        case DELETE_USER_FAILED:
            return {
                ...state,
                loading: false,
            };

        case BLOCK_UNBLOCK_USER_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case BLOCK_UNBLOCK_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                blockUnblockUserData: action.payload.entity,
                loading: false,
            };
        case BLOCK_UNBLOCK_USER_FAILED:
            return {
                ...state,
                loading: false,
            };


        case DELETE_POST_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                ...action.payload,
                deletePostData: action.payload.entity,
                loading: false,
            };
        case DELETE_POST_FAILED:
            return {
                ...state,
                loading: false,
            };

        case BLOCK_UNBLOCK_POST_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case BLOCK_UNBLOCK_POST_SUCCESS:
            return {
                ...state,
                ...action.payload,
                blockUnblockPostData: action.payload.entity,
                loading: false,
            };
        case BLOCK_UNBLOCK_POST_FAILED:
            return {
                ...state,
                loading: false,
            };


        case DELETE_MAIL_TEMPLATE_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case DELETE_MAIL_TEMPLATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                deleteMailTemplateData: action.payload.entity,
                loading: false,
            };
        case DELETE_MAIL_TEMPLATE_FAILURE:
            return {
                ...state,
                loading: false,
            };

        case REQUEST_MANAGEMENT_ACTIONS_INIT:
            return {
                ...state,
                ...action.payload,
                loading: true,
            };
        case REQUEST_MANAGEMENT_ACTIONS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                requestManagementData: action.payload.entity,
                loading: false,
            };
        case REQUEST_MANAGEMENT_ACTIONS_FAILURE:
            return {
                ...state,
                loading: false,
            };


        default:
            return state;
    }

}