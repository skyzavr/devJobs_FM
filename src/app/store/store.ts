import { configureStore } from '@reduxjs/toolkit';

import { fetchReducer } from '@widgets/JobSection/model/jobsSlice';
import { filterReducer } from '@widgets/Filter/model/filterSlice';
import { themeReducer } from '@features/Theme/model/themeSlice';
import { pageReducer } from '@widgets/pagination/model/pageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    jobs: fetchReducer,
    filters: filterReducer,
    pagination: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
