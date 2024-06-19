import { useCallback, useMemo } from 'react';

import { DOTS } from './types';

type props = { page: number; gap: number; pageNumber: number };

export const usePagination = ({ page, gap, pageNumber }: props) => {
  const range = useCallback((start: number, end: number) => {
    const len = end - start + 1;
    return Array(len)
      .fill(null)
      .map((_, i) => i + start);
  }, []);

  const paginationRange = useMemo(() => {
    const prev = Math.max(page - gap, 1);
    const next = Math.min(page + gap, pageNumber);
    const isShowLeftDots = prev > 1;
    const isShowRightDots = next <= pageNumber - 1;
    const leftRange = range(page - gap, pageNumber);
    const rightRange = range(1, page + gap);

    //only left dots
    if (isShowLeftDots && !isShowRightDots) return [1, DOTS, ...leftRange];

    //only right dots
    if (!isShowLeftDots && isShowRightDots)
      return [...rightRange, DOTS, pageNumber];

    //both side dots
    if (isShowLeftDots && isShowRightDots)
      return [1, DOTS, ...range(prev, next), DOTS, pageNumber];

    return range(1, pageNumber);
  }, [page, gap, pageNumber, range]);

  return paginationRange;
};
