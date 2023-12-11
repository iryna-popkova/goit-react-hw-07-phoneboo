import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https:/65771645197926adf62d4bb3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(`/contacts/contacts`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const contactToSave = await axios.post('/contacts/contacts', {
        name,
        phone,
      });
      return contactToSave.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await axios.delete(`/contacts/contacts/${id}`);
      return contactToDelete.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
