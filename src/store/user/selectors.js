const selectAuthorizationStatus = (state) => {
  return state.user.isAuthorized;
};

export {selectAuthorizationStatus};
