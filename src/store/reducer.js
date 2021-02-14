import {combineReducers} from 'redux';
import userReducer from './user/user-slice';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.USER]: userReducer,
});
