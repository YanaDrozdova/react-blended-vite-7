import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

//generators of actions
export const { setBaseCurrency } = currencySlice.actions;

// reducer of  slice
export const currencyReducer = currencySlice.reducer;
