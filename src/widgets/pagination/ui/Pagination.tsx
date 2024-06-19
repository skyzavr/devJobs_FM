import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@app/store/store';

import { Button } from '@shared/ui/button/Button';
import { useWidth } from '@shared/hooks/useWidth';
import { ListBtn } from '@shared/ui/listButton/ListBtn';
import { setPage } from '../model/pageSlice';
import { DOTS } from '../lib/types';
import { usePagination } from '../lib/usePagination';

import cn from './pagination.module.css';

export const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const width = useWidth();

  const itemsNumber = useSelector(
    (state: RootState) => state.jobs.entities.length
  );
  const { page, pageSize, totalPages } = useSelector(
    (state: RootState) => state.pagination
  );
  const pageNumber = Math.ceil(totalPages / pageSize);

  const [gap, setGap] = useState(1);
  const paginationRange = usePagination({ page, gap, pageNumber });

  const onNext = () => {
    if (page == pageNumber) return;
    dispatch(setPage({ pageSize, totalPages, page: page + 1 }));
  };
  const onPrev = () => {
    if (page == 1) return;
    dispatch(setPage({ pageSize, totalPages, page: page - 1 }));
  };
  const onSetPage = (page: number) =>
    dispatch(setPage({ pageSize, totalPages, page }));

  const disabled = (pageNum = 1) =>
    `${cn.btn} ${page === pageNum ? cn.disabled : ''}`;

  const currentPageCl = (el: number | string) =>
    el === page ? cn.current : cn.btn;

  useEffect(() => {
    setGap(width < 450 ? 1 : 2);
  }, [width]);

  if (itemsNumber <= 0) return null;

  return (
    pageNumber > 1 && (
      <section className={cn.container}>
        {page < pageNumber && (
          <Button onClickHandler={onNext}>Load more</Button>
        )}
        <ul className={cn.wrapper}>
          <ListBtn onClick={onPrev} cl={disabled()} value="&#8636;" />
          <div className={cn.btnWrapper}>
            {paginationRange?.map((el, ind) =>
              el === DOTS ? (
                <span className={cn.dots} key={ind}>
                  {DOTS}
                </span>
              ) : (
                <ListBtn
                  key={ind}
                  onClick={() => onSetPage(el as number)}
                  cl={currentPageCl(el)}
                  value={el}
                />
              )
            )}
          </div>
          <ListBtn onClick={onNext} cl={disabled(pageNumber)} value="&#8641;" />
        </ul>
      </section>
    )
  );
};
