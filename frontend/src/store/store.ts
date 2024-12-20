import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
export { ActionsType } from './types.d'

const store = configureStore({
	reducer: rootReducer,
  });

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
  
export default store;