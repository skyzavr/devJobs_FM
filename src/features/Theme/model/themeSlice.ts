import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../lib/initialTheme';

type ThemeColor = PayloadAction<'light' | 'dark'>;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action: ThemeColor) => action.payload,
  },
});
export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
