import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '@app/store/store';

import { JobCard } from '@widgets/JobCard';
import { Error } from '@widgets/Error';
import { JobCardSkeleton } from '@widgets/jobCardSkeleton';
import { clearFilters } from '@widgets/Filter/model/filterSlice';
import { setInitPage, setTotal } from '@widgets/pagination/model/pageSlice';
import { useJobFetch } from '@features/Jobs/lib/useJobFetch';
import { Button } from '@shared/ui/button/Button';

import cn from './jobSection.module.css';

export const JobSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { entities, error, loading, errorMsg } = useJobFetch(3000);
  const { title, location, fullTime, filtersApplied } = useSelector(
    (state: RootState) => state.filters
  );
  const { page, pageSize } = useSelector(
    (state: RootState) => state.pagination
  );

  const jobList = entities.filter((el) => {
    const isIncludesLocation = el.location.toLowerCase().includes(location);
    const isIncludesTitle = el.position.toLowerCase().includes(title);
    const isFillTimeJob = el.contract.includes(fullTime ? 'Full Time' : '');
    if (isIncludesLocation && isIncludesTitle && isFillTimeJob) return el;
  });
  const jobListSlice = jobList.slice(
    Math.max((page - 1) * pageSize, 0),
    page * pageSize
  );

  const skeletonSection = Array(9)
    .fill(null)
    .map((_, ind) => <JobCardSkeleton key={ind} />);

  const clearFiltersHandler = () => {
    dispatch(clearFilters());
    dispatch(setInitPage());
  };
  useEffect(() => {
    dispatch(setTotal({ totalPages: jobList.length, page, pageSize }));
  }, [jobList]);
  return (
    <>
      {!loading && !error && (
        <section className={cn.resultData}>
          {jobList.length !== 0 && <> Results: {jobList.length}</>}
          {jobList.length === 0 && (
            <> Looks like there is no result! Try to change your queries</>
          )}
          {filtersApplied && (
            <Button onClickHandler={clearFiltersHandler} type="accent">
              Clear filters
            </Button>
          )}
        </section>
      )}

      <section className={cn.wrapper}>
        {loading && skeletonSection}
        {error && <Error msg={errorMsg} />}
        {jobListSlice.map((el) => (
          <JobCard {...{ el }} key={el.id} />
        ))}
      </section>
    </>
  );
};
