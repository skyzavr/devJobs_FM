import { Outlet } from 'react-router-dom';

import { Header } from '@widgets/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
