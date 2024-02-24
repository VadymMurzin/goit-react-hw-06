// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlicer';
import filtersReducer from './filtersSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
