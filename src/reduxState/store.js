import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { currencyReducer } from './currencySlice';

const persistConfig = {
  key: 'baseCurrency',
  version: 1,
  storage,
};

const persistedCurrencyReducer = persistReducer(persistConfig, currencyReducer);

export const store = configureStore({
  reducer: {
    currency: persistedCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
