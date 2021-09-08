import * as actions from './search-actions';
import { createReducer } from '@reduxjs/toolkit';

export const searchReducer = createReducer('', {
  [actions.search]: (_, { payload }) => payload,
});
