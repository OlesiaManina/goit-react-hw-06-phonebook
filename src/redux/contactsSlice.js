import { createSlice } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialContacts = {
  contacts: [
    {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
    {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
    {"id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
    {"id": "id-4", "name": "Annie Copeland", "number": "227-91-26"}
],
  filter: ''
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
      addContact: (state, action) => {
        state.contacts = [...state.contacts, action.payload]
    },
    deleteContactAct: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload)
  },
}
});

const persistConfig = {
  key: 'root',
  storage,
}

const contactsReducer = contactsSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer)
export const { addContact, deleteContactAct } = contactsSlice.actions;
