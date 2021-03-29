import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/user';
import NameSpace from '../name-space';

interface UserState {
  isAuthorized: boolean;
  info: User;
}

const initialState: UserState = {
  isAuthorized: false,
  info: {
    email: ``,
  }
};

const userSlice = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    authorize: ((state, action): void => {
      const {email} = action.payload;

      state.info.email = email;
      state.isAuthorized = true;
    })
  }
});

export const {authorize} = userSlice.actions;
export default userSlice.reducer;
