import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await axios.get('http://localhost:2015/contacts/');
    return contacts.data;
  }
);

export const postContact = (body) => async (dispatch) => {
  try {
    await axios.post('http://localhost:2015/contacts/', body).then((data) => {
      dispatch(actions.add(data.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:2015/contacts/${id}`).then(() => {
      dispatch(actions.remove(id));
    });
  } catch (error) {
    console.log(error);
  }
};
