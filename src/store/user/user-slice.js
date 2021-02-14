import {createSlice} from '@reduxjs/toolkit';
import NameSpace from '../name-space';

const userSlice = createSlice({
  name: NameSpace.USER,
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
