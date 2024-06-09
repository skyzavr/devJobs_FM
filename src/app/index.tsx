import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from '@store/store';
import { Home } from '@pages/home';
import { Job } from '@pages/job';
import { Layout } from '@widgets/Layout';
import { Error } from '@widgets/Error';

import cn from './style/index.module.css';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/:id',
          element: <Job />,
          errorElement: <Error msg="Some problem" />,
        },
      ],
    },
  ]);

  return (
    <Provider {...{ store }}>
      <div className={cn.wrapper}>
        <RouterProvider {...{ router }}></RouterProvider>
      </div>
    </Provider>
  );
};

export default App;
