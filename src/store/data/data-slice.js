import {createSlice} from '@reduxjs/toolkit';
import {offers} from '../../test-data';
import NameSpace from '../name-space';

const dataSlice = createSlice({
  name: NameSpace.DATA,
  initialState: {
    offers
  },
  reducers: {}
});

export default dataSlice.reducer;
