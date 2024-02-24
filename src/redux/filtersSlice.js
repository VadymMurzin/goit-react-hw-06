// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    updateFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
