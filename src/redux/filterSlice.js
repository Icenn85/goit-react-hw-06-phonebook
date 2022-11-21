import { createSlice } from '@reduxjs/toolkit';

const initialContactState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialContactState,
  reducers: {
    filterContactsAction: (state, action) => state.status = action.payload,
  },
});

export const { filterContactsAction } = filterSlice.actions;

export const getFilterValue = state => state.filter;
