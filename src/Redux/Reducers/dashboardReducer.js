import {
  LIST_DATA_INIT, LIST_DATA_SUCCESS, LIST_DATA_FAILED,
} from '../ActionTypes/dashboardActionTypes';

export const iniitialState= {
  listData: null,
 };

export default function dashboardReducer(state = iniitialState, action){
    // debugger
    console.log("action.payload.entity",action)

  switch (action.type) {

    case LIST_DATA_INIT:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case LIST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        listData: action.payload.entity,
        loading: false,
      };
      case LIST_DATA_FAILED: 
      return {
        ...state,
        loading: false,

      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}