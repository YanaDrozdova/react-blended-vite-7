import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.exchangeInfo = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchRates.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

//generators of actions
export const { setBaseCurrency } = currencySlice.actions;

// reducer of  slice
export const currencyReducer = currencySlice.reducer;
