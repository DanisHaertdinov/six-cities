import {combineReducers} from 'redux';
import userReducer from './user/user-slice';

export default combineReducers({
  user: userReducer,
});
