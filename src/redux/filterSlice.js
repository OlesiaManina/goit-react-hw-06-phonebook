import { createSlice } from "@reduxjs/toolkit";

const initialContacts = {
    filter: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialContacts,
    reducers: {
      addFilter: {
        reducer(state, action) {
          state.filter = action.payload;
        },
      },
    },
  });

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;