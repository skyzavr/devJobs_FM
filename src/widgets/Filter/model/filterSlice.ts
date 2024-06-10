import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type init = {
  title: string;
  location: string;
  fullTime: boolean;
  filtersApplied: boolean;
};
type iState = { [key: string]: string | boolean };

const initialState: init = {
  title: '',
  location: '',
  fullTime: false,
  filtersApplied: false,
};
const isTheSameState = (currentState: iState, initState: iState) => {
  const curStateKeys = Object.keys(currentState);
  const initStateKeys = Object.keys(initState);

  if (curStateKeys.length !== initStateKeys.length) return false;

  for (const key of curStateKeys) {
    if (currentState[key] !== initState[key]) return false;
  }
  return true;
};
const Filters = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setNewFilter: (state, action: PayloadAction<init>) => {
      if (isTheSameState({ ...action.payload }, initialState)) return;
      state.title = action.payload.title.toLowerCase();
      state.location = action.payload.location.toLowerCase();
      state.fullTime = action.payload.fullTime;
      state.filtersApplied = true;
    },
    clearFilters: () => {
      return initialState;
    },
  },
});
export const { setNewFilter, clearFilters } = Filters.actions;
export const filterReducer = Filters.reducer;
