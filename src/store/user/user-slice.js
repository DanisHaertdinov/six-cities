import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: `user`,
  initialState: {
    isAuthorized: false,
    info: {
      email: ``
    }
  },
  reducers: {
    authorize: ((state, action) => {
      const {email} = action.payload;

      state.info.email = email;
      state.isAuthorized = true;
    })
  }
});

export const {authorize} = userSlice.actions;

export default userSlice.reducer;
