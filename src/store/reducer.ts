import {combineReducers} from 'redux';
import userReducer from './user/user-slice';
import NameSpace from './name-space';
import dataReducer from './data/data-slice';

const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.DATA]: dataReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
