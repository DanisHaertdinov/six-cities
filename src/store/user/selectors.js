import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

const selectAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorized;
};

export {selectAuthorizationStatus};
