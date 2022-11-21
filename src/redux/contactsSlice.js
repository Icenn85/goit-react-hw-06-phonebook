import { createSlice } from '@reduxjs/toolkit';

const initialContactState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialContactState,
  reducers: {
    addContactAction: (state, action) => [...state, action.payload],

    deleteContactAction: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const getContacts = state => state.contacts;
