import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';

import { Search } from '@shared/ui/searchField/Search';
import search from '/public/assets/icons/icon-search.svg';

type props = { liftDataUp: (data: string) => void };

export const TitleFilter = ({ liftDataUp }: props) => {
  const titleValue = useSelector((state: RootState) => state.filters.title);

  const [title, setTitle] = useState<string>(titleValue);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    setTitle(value);
    liftDataUp(value);
  };
  useEffect(() => {
    setTitle(titleValue);
  }, [titleValue]);
  return (
    <Search
      placeholder="Filter by title"
      value={title}
      onChangeHand={searchHandler}
    >
      <img src={search} />
    </Search>
  );
};
