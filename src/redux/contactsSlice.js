import { createSlice } from "@reduxjs/toolkit";
import initialContacts from '../components/contacts';

// const initialState = [initialContacts]


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
      addContact: (state, action) => {
        state.push(action.payload)
        // state.contacts = [...state.contacts, action.payload]
    },
    
    deleteContactAct: (state, action) => {
      const index = state.findIndex(el => el.id === action.payload);
      state.splice(index, 1);
      // state = state.filter(el => el.id !== action.payload)
  },
}
});

export const { addContact, deleteContactAct } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;