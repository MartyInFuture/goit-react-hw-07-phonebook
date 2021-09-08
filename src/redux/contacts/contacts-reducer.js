import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { fetchContacts } from './contacts-operations';

const contactsRemove = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [actions.add]: (state, action) => [...state, action.payload],
  [actions.remove]: contactsRemove,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
