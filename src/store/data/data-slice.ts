import {createSlice} from '@reduxjs/toolkit';
import {offers} from '../../test-data';
import {Offer} from '../../types/offer';
import NameSpace from '../name-space';

interface DataState {
  offers: Offer[];
}

const initialState: DataState = {
  offers
};

const dataSlice = createSlice({
  name: NameSpace.DATA,
  initialState,
  reducers: {}
});

export default dataSlice.reducer;
