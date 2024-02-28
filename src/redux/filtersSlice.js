import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filters',
//   initialState: '',
//   reducers: {
//     filterFiltration: (state, action) => {
//       return state, action.payload;
//     },
//   },
// });


const filterSlice = createSlice({
  name: 'filters',
  initialState: { text: '' }, // Використовуйте об'єкт із властивістю text
  reducers: {
    filterFiltration: (state, action) => {
      // state.text = action.payload; // Оновлюйте властивість text
      // return { text: action.payload };
      return { ...state, text: action.payload };
      // return Object.assign({}, state, { text: action.payload });
    },
  },
});



export const { filterFiltration } = filterSlice.actions;
export default filterSlice.reducer;
