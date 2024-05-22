import { useLocation } from 'react-router-dom';

import { JobInfo } from '@widgets/jobInfo';
import { JobDesc } from '@widgets/jobDescription';
import { JobFooter } from '@widgets/jobFooter';
import { Error } from '@widgets/Error';
import { Loading } from '@widgets/Loading';
import { job } from '@shared/types/card';

import { useJobFetch } from '@features/Jobs/lib/useJobFetch';

type LocationState = {
  pathname: string;
  state: { id: number } | null;
};

export const Job = () => {
  const { entities, error, loading, errorMsg } = useJobFetch(500);
  const { pathname }: LocationState = useLocation();
  const id = Number(pathname.slice(pathname.indexOf('/') + 1));
  const job = entities.filter((el: job) => Number(el.id) === id)[0];

  if (loading) return <Loading />;
  if (error) return <Error msg={errorMsg} />;
  if (!job) return <Error msg="Looks like this page does not exist" />;
  const {
    logo,
    company,
    logoBackground,
    position,
    postedAt,
    contract,
    location: loc,
    website,
    apply,
    description,
    requirements,
    role,
  } = job;
  const desc = {
    position,
    postedAt,
    contract,
    loc,
    apply,
    description,
    requirements,
    role,
  };
  return (
    <section>
      <JobInfo {...{ logoBackground, logo, company, website }} />
      <JobDesc {...{ ...desc }} />
      <JobFooter {...{ position, company, apply }} />
    </section>
  );
};
