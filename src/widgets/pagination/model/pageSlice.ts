import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type init = { page: number; pageSize: number; totalPages: number };

const initialState: init = {
  page: 1,
  pageSize: 7,
  totalPages: 0,
};

const pageSlice = createSlice({
  name: 'pageFilter',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<init>) => {
      state.page = action.payload.page;
    },
    setInitPage: (state) => {
      state.page = 1;
    },
    setTotal: (state, action: PayloadAction<init>) => {
      state.totalPages = action.payload.totalPages;
    },
  },
});
export const pageReducer = pageSlice.reducer;
export const { setPage, setTotal, setInitPage } = pageSlice.actions;
