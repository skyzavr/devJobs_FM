import { JobSection } from '@widgets/JobSection';
import { Filter } from '@widgets/Filter';
import { Pagination } from '@widgets/pagination';

export const Home = () => {
  return (
    <>
      <Filter />
      <JobSection />
      <Pagination />
    </>
  );
};
