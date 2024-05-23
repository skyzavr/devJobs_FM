import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@app/store/store';

import { setFullTimeJob } from '../model/FullTimeJobSlice';
import { CheckBox } from '@shared/ui/checkBox/CHeckBox';

export const FullTime = () => {
  const checked = useSelector((state: RootState) => state.fullTimeJob);
  const dispatch = useDispatch<AppDispatch>();

  const onUpdate = () => dispatch(setFullTimeJob());

  return (
    <CheckBox title="Full time only" checked={checked} onUpdate={onUpdate} />
  );
};
