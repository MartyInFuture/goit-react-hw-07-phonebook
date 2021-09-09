import { createAction } from '@reduxjs/toolkit';

export const addRequest = createAction('contacts/addRequest');
export const addSuccess = createAction('contacts/addSucces');
export const addError = createAction('contacts/addError');

export const removeRequest = createAction('contacts/RemoveRequest');
export const removeSuccess = createAction('contacts/RemoveSuccess');
export const removeError = createAction('contacts/RemoveError');
