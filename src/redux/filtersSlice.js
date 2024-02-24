import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    addContacts: (state, action) => {
      return [...state, ...action.payload];
    },
    filterFiltration: (state, action) => {
      return state, action.payload;
    },
  },
});



export const { filterFiltration } = filterSlice.actions;
export default filterSlice.reducer;
