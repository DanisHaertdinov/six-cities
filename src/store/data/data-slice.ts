import {createSlice} from '@reduxjs/toolkit';
import {offers} from '../../test-data';
import NameSpace from '../name-space';
import {Offer} from "../../types/offer";

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
