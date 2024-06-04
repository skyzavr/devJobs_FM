import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@app/store/store';
import { CheckBox } from '@shared/ui/checkBox/CheckBox';

type props = { liftDataUp: (data: boolean) => void };

export const FullTime = ({ liftDataUp }: props) => {
  const checked = useSelector((state: RootState) => state.filters.fullTime);
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onUpdate = () => {
    setIsChecked((prev) => !prev);
    liftDataUp(!isChecked);
  };

  return (
    <CheckBox title="Full time only" checked={isChecked} onUpdate={onUpdate} />
  );
};
