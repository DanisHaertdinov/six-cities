const getAuthorizationStatus = (state) => {
  return state.user.isAuthorized;
};

export {getAuthorizationStatus};
