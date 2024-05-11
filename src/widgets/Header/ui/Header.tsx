import { useNavigate } from 'react-router-dom';

import { Theme } from '@features/Theme';

import cn from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/`);

  return (
    <header className={cn.wrapper}>
      <div className={cn.container}>
        <p className={cn.title} onClick={navigateHandler}>
          devJobs
        </p>
        <Theme />
      </div>
    </header>
  );
};
