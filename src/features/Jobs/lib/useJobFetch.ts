import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '@store/store';

import { fetchJobsList } from '@widgets/JobSection/model/jobsSlice';

export const useJobFetch = (time: number) => {
  const dispatch = useDispatch<AppDispatch>();

  const { entities, error, loading, errorMsg } = useSelector(
    (state: RootState) => state.jobs
  );

  const getJobs = useCallback(
    (time: number) => setTimeout(() => dispatch(fetchJobsList()), time),
    [dispatch]
  );

  useEffect(() => {
    if (entities.length > 0) return;

    getJobs(time);
  }, [getJobs, time, entities.length]);

  return { entities, error, loading, errorMsg };
};
