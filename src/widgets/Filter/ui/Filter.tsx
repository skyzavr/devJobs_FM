import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@app/store/store';

import { FullTime } from '@features/fullTimeJob';
import { TitleFilter } from '@features/generalFilter';
import { LocationFilter } from '@features/locationFilter';
import { Button } from '@shared/ui/button/Button';
import { Modal } from '@shared/ui/modalWindow/Modal';
import { useWidth } from '@shared/hooks/useWidth';
import { setNewFilter } from '../model/filterSlice';

import filter from '/public/assets/icons/icon-filter.svg';

import cn from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const width = useWidth();

  const filtersInit = useSelector((state: RootState) => state.filters);

  const [filters, setFilters] = useState({ ...filtersInit });
  const [showModal, setShowModal] = useState(false);

  const data = useSelector((state: RootState) => state.jobs.entities);
  const searchHandler = () => dispatch(setNewFilter({ ...filters }));

  const onUpdateTitle = (title: string) =>
    setFilters((fil) => ({ ...fil, title }));

  const onUpdateLocation = (location: string) =>
    setFilters((fil) => ({ ...fil, location }));

  const onUpdateFullTime = (fullTime: boolean) =>
    setFilters((fil) => ({ ...fil, fullTime }));

  const onHandleModal = () => setShowModal((prev) => !prev);

  const onUpdateFilters = () => {
    searchHandler();
    onHandleModal();
  };

  useEffect(() => {
    setFilters({ ...filtersInit });
  }, [filtersInit]);

  const filterChildren = (
    <>
      <TitleFilter liftDataUp={onUpdateTitle} />
      <LocationFilter liftDataUp={onUpdateLocation} />
      <FullTime liftDataUp={onUpdateFullTime} />
    </>
  );
  if (data.length === 0) return null;
  return (
    <section className={cn.container}>
      {width > 768 ? (
        <>
          <div className={cn.wrapper}>{filterChildren}</div>
          <Button onClickHandler={searchHandler}>Search</Button>
        </>
      ) : (
        <>
          <Button onClickHandler={onHandleModal}>
            <img src={filter} className={cn.filterBtn} />
          </Button>
          {showModal &&
            createPortal(
              <Modal onHandleModal={onHandleModal}>
                {filterChildren}
                <Button onClickHandler={onUpdateFilters}>Search</Button>
              </Modal>,
              document.body
            )}
        </>
      )}
    </section>
  );
};
