import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './template/Layout';
import ProductPage from './Views/ProductPage';
import Wishlist from './Views/Wishlist';
import CartPage from './Views/CartPage'
import ReviewForm from './Views/ReviewForm';
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produto/:id", element: <ProductPage /> },
      { path: "/lista-de-desejos", element: <Wishlist /> },
      { path: "/carrinho", element: <CartPage /> },
      { path: "/avaliar", element: <ReviewForm /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/cadastro", element: <Register /> }
]);

export default Router;
