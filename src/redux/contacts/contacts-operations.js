import * as actions from './contacts-actions';
import axios from 'axios';

export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await axios.get('http://localhost:3001/contacts/');
    dispatch(actions.fetchContactsSuccess(contacts.data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const postContact = (body) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3001/contacts/', body).then((data) => {
      dispatch(actions.add(data.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/contacts/${id}`).then(() => {
      dispatch(actions.remove(id));
    });
  } catch (error) {
    console.log(error);
  }
};
