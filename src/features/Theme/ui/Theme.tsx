import { useTheme } from '../lib/useTheme';

import cn from './theme.module.css';

export const Theme = () => {
  const { theme, themeHandler } = useTheme();
  const checked = !(theme === 'light');

  return (
    <div className={cn.wrapper}>
      <img src="/assets/icons/icon-sun.svg" />
      <label className={cn.switch}>
        <input type="checkbox" onChange={themeHandler} checked={checked} />
        <span className={cn.slider}></span>
      </label>
      <img src="/assets/icons/icon-moon.svg" />
    </div>
  );
};
