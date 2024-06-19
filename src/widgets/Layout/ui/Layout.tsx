import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/Header';
import { ScrollButton } from '@features/scrollBtn';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollButton />
    </>
  );
};
