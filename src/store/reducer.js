import {combineReducers} from 'redux';
import userReducer from './user/user-slice';
import NameSpace from './name-space';
import dataReducer from './data/data-slice';

export default combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.DATA]: dataReducer
});
