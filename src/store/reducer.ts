import {combineReducers} from 'redux';
import dataReducer from './data/data-slice';
import NameSpace from './name-space';
import userReducer from './user/user-slice';

const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.DATA]: dataReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
