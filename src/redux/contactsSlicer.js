import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: (state, action) => {
      return [state, ...action.payload];
    },
    prepare: (contacts) => {
      return {
        payload: contacts,
      };
    },
    deleteContacts: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;