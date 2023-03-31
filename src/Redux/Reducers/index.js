import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  authReducer,
  commonReducer,
  dashboardReducer
});

export default rootReducer;
