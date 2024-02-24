// filtersSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: {
//     name: '',
//   },
//   reducers: {
//     updateFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { updateFilter } = filtersSlice.actions;

// export default filtersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterFiltration: (state, action) => {
      return state, action.payload;
    },
  },
});

export const { filterFiltration } = filterSlice.actions;
export default filterSlice.reducer;
