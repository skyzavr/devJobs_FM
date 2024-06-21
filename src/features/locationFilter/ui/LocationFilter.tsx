import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';

import { Search } from '@shared/ui/searchField/Search';
import location from '/assets/icons/icon-location.svg';

type props = { liftDataUp: (data: string) => void };

export const LocationFilter = ({ liftDataUp }: props) => {
  const LocValue = useSelector((state: RootState) => state.filters.location);

  const [loc, setLoc] = useState<string>(LocValue);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    setLoc(value);
    liftDataUp(value);
  };
  useEffect(() => {
    setLoc(LocValue);
  }, [LocValue]);

  return (
    <Search
      placeholder="Filter by location"
      value={loc}
      onChangeHand={searchHandler}
    >
      <img src={location} />
    </Search>
  );
};
