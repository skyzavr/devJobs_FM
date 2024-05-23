import { createSlice } from '@reduxjs/toolkit';

const fullTimeJob = createSlice({
  name: 'fullTimeJob',
  initialState: false,
  reducers: {
    setFullTimeJob: (state) => !state,
  },
});
export const { setFullTimeJob } = fullTimeJob.actions;
export const fullTimeJobReducer = fullTimeJob.reducer;
