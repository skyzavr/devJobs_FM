import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { job, init } from '@shared/types/card';

const initialState: init = {
  entities: [],
  error: false,
  loading: true,
  errorMsg: '',
};

export const fetchJobsList = createAsyncThunk(
  'jobsList/load',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/src/mock/data.json');
      if (!response.ok) {
        throw new Error('Ough, sorry! Our fault');
      }
      return (await response.json()) as job[];
    } catch (error) {
      return rejectWithValue('Ough, sorry! Our fault');
    }
  }
);
const jobsListSlice = createSlice({
  name: 'jobsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobsList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchJobsList.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.errorMsg = 'Ough, sorry! Our fault';
      })
      .addCase(
        fetchJobsList.fulfilled,
        (state, action: PayloadAction<job[]>) => {
          state.entities = action.payload;
          state.loading = false;
          state.error = false;
        }
      );
  },
});
export const fetchReducer = jobsListSlice.reducer;
