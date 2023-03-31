import { CHANGE_PASSWORD_INIT, CHANGE_PASSWORD_STATUS_INIT, FORGOT_PASSWORD_INIT, LOGIN_INIT, LOGOUT_INIT, RESET_PASSWORD_INIT, VERIFY_TOKEN_INIT } from "../ActionTypes/authActionTypes";
//import { ADD_PARTY_IN_PROPERTY_INIT, PARTY_ADD_PROPERTY_INIT } from "../ActionTypes/privateActionTypes";

export const loginData = (obj) => {
  return { type: LOGIN_INIT, payload: obj };
};

// export const logout = (obj) => {
//   return { type: LOGOUT_INIT, payload: obj };
// };

// export const changePassword = (obj) => {
//   return { type: CHANGE_PASSWORD_INIT, payload: obj };
// };
// export const changePasswordsStatus = (obj) => {
//   return { type: CHANGE_PASSWORD_STATUS_INIT, payload: obj };
// };
// export const forgotPassword = (obj) => {
//   return { type: FORGOT_PASSWORD_INIT, payload: obj };
// };

// export const verifyToken = (obj) => {
//   return { type: VERIFY_TOKEN_INIT, payload: obj };
// };

// export const resetPassword = (obj) => {
//   return { type: RESET_PASSWORD_INIT, payload: obj};
// };