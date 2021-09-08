import contactsReducer from './contacts/contacts-reducer';
import { searchReducer } from './search/search-reducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    search: searchReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
