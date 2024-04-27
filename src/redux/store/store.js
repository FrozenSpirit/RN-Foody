import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../reducers/allReducers';

export const store = configureStore({
  reducer: rootReducer,
});
