import { ReactElement, ChangeEvent } from 'react';

import cn from './search.module.css';

type props = {
  placeholder: string;
  children: ReactElement;
  value: string;
  onChangeHand: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const Search = (props: props) => {
  const { placeholder, children, value, onChangeHand } = props;
  return (
    <div className={cn.titleSearch}>
      <div className={cn.icon}>{children}</div>
      <div className={cn.search}>
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={onChangeHand}
        />
      </div>
    </div>
  );
};
