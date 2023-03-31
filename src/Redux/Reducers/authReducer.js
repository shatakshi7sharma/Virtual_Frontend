import { getCookie } from '../../Services/cookies';
import {
  LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILED,
  LOGOUT_INIT, LOGOUT_SUCCESS, LOGOUT_FAILED,
  VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_INIT,
  VERIFY_TOKEN_FAILED,
  LOGIN_SUCCESS_CLEAR,
} from '../ActionTypes/authActionTypes';



export const iniitialState= {
  loginResponse: null,
  deletedStatus: false,
  loading: true,
  isLogin: getCookie('hype')?.token ? true : false,
  loginSuccess: false,
  resetSuccess: false,
  verificationTokenData:null,
  resetData:null,
 };

export default function authReducer(state = iniitialState, action){
  switch (action.type) {

    case LOGIN_INIT:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loginResponse: action.payload.entity,
        loading: false,
        isLogin: true,
        loginSuccess: true,
      };
      case LOGIN_SUCCESS_CLEAR: 
      return {
        ...state,
        loginSuccess: false,
        isLogin: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
        message: action.payload.message,
        error: true,
        loading: false,
        isLogin: false,
      };
    case LOGOUT_INIT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        loading: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
      };
    case VERIFY_TOKEN_INIT:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        verificationTokenData: action.payload.entity,
        loading: false,
      };
    case VERIFY_TOKEN_FAILED:
      return {
        ...state,
        ...action.payload,
        verificationTokenData: action.payload.entity,
        message: action.payload.message,
        error: true,
        loading: false,
      };
       

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}