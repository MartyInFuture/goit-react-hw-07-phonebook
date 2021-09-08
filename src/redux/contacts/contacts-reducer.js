import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const INIT_STATE = [];

const contactsRemove = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer(INIT_STATE, {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.add]: (state, action) => [...state, action.payload],
  [actions.remove]: contactsRemove,
});

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
