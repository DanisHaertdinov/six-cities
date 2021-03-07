import NameSpace from '../name-space';
import {RootState} from "../reducer";

const NAME_SPACE = NameSpace.USER;

const selectAuthorizationStatus = (state: RootState): boolean => {
  return state[NAME_SPACE].isAuthorized;
};

export {selectAuthorizationStatus};
