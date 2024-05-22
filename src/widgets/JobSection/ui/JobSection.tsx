import { JobCard } from '@widgets/JobCard';
import { Error } from '@widgets/Error';
import { JobCardSkeleton } from '@widgets/jobCardSkeleton';

import { useJobFetch } from '@features/Jobs/lib/useJobFetch';

import cn from './jobSection.module.css';

export const JobSection = () => {
  const { entities, error, loading, errorMsg } = useJobFetch(3000);

  const skeletonArr = Array(9).fill(null);
  const skeletonSection = skeletonArr.map((_, ind) => (
    <JobCardSkeleton key={ind} />
  ));
  return (
    <section className={cn.wrapper}>
      {loading && skeletonSection}
      {error && <Error msg={errorMsg} />}
      {entities.map((el) => (
        <JobCard {...{ el }} key={el.id} />
      ))}
    </section>
  );
};
