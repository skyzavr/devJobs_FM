import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '@store/store';
import { fetchJobsList } from '../model/jobsSlice';

import { JobCard } from '@widgets/JobCard';
import { Loading } from '@widgets/Loading';
import { Error } from '@widgets/Error';

import cn from './jobSection.module.css';

export const JobSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { entities, error, loading, errorMsg } = useSelector(
    (state: RootState) => state.jobs
  );

  const initTimeout = useCallback(
    () => setTimeout(() => dispatch(fetchJobsList()), 3000),
    [dispatch]
  );

  useEffect(() => {
    initTimeout();
  }, [initTimeout]);

  return (
    <section className={cn.wrapper}>
      {loading && <Loading />}
      {error && <Error msg={errorMsg} />}
      {entities.map((el) => (
        <JobCard {...{ el }} key={el.id} />
      ))}
    </section>
  );
};
