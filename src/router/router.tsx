import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Users from '../pages/Users/Users';
import Products from '../pages/Products/Products';
import Layout from '../components/Layout/Layout';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
