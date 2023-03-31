import {
    EXPORT_ACTION_INIT,
    DELETE_USER_INIT,
    BLOCK_UNBLOCK_USER_INIT,
    DELETE_POST_INIT,
    BLOCK_UNBLOCK_POST_INIT,
    DELETE_MAIL_TEMPLATE_INIT,
    REQUEST_MANAGEMENT_ACTIONS_INIT

} from "../ActionTypes/commonActionTypes";

export const getExportData = (obj) => {
    return {
        type: EXPORT_ACTION_INIT,
        payload: obj
    }
};

export const deleteUser = (obj) => {
    return {
        type: DELETE_USER_INIT,
        payload: obj
    }
};

export const blockUnblockUser = (obj) => {
    return {
        type: BLOCK_UNBLOCK_USER_INIT,
        payload: obj
    }
};

export const deletePost = (obj) => {
    return {
        type: DELETE_POST_INIT,
        payload: obj
    }
};

export const blockUnblockPost = (obj) => {
    return {
        type: BLOCK_UNBLOCK_POST_INIT,
        payload: obj
    }
};

export const deleteMailTemplate = (obj) => {
    return {
        type: DELETE_MAIL_TEMPLATE_INIT,
        payload: obj
    }
};

export const requestManagementAction = (obj) => {
    return {
        type: REQUEST_MANAGEMENT_ACTIONS_INIT,
        payload: obj
    }
};