import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@store/store';
import { setTheme } from '../model/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const themeHandler = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, themeHandler };
};
