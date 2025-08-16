import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './template/Layout';
import Home from './Views/Home';
import ProductPage from './Views/ProductPage';
import Wishlist from './Views/Wishlist';
import CartPage from './Views/CartPage'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produto/:id", element: <ProductPage /> },
      { path: "/lista-de-desejos", element: <Wishlist /> },
      { path: "/carrinho", element: <CartPage /> },
    ],
  },
]);

export default Router;
