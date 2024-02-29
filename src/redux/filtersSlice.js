import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { text: '' },
  reducers: {
    filterFiltration: (state, action) => {
      return { ...state, text: action.payload };
    },
  },
});

export const { filterFiltration } = filterSlice.actions;
export default filterSlice.reducer;
