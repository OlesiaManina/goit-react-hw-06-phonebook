import { createSlice } from "@reduxjs/toolkit";
// import contactInitialState from '../components/contacts'


// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     reducers: {
//       addFilterValue: (state, action) => {
//         state.filter = action.payload;
//     },
// }
// });

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
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