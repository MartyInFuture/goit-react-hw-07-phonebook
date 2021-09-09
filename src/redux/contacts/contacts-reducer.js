import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { fetchContacts } from './contacts-operations';

const contactsRemove = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [actions.addSuccess]: (state, action) => [...state, action.payload],
  [actions.removeSuccess]: contactsRemove,
});

const isLoading = createReducer(false, {
  [actions.addRequest]: () => true,
  [actions.addSuccess]: () => false,
  [actions.addError]: () => false,
  [actions.removeRequest]: () => true,
  [actions.removeSuccess]: () => false,
  [actions.removeError]: () => false,
});

const error = createReducer(null, {
  [actions.removeError]: (_, action) => action.payload,
  [actions.removeRequest]: null,
  [actions.addError]: (_, action) => action.payload,
  [actions.addRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
