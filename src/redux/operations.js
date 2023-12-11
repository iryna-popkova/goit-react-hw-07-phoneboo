import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://657766af197926adf62e39cb.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(`phonebook/contacts`);
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
      const contactToSave = await axios.post('phonebook/contacts', {
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
      const contactToDelete = await axios.delete(`phonebook/contacts/${id}`);
      return contactToDelete.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
