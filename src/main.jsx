import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compoents/Home/Home.jsx';
import Blog from './compoents/Blog/Blog.jsx';
import AddDoll from './compoents/AddDoll/AddDoll.jsx';
import AllDolls from './compoents/AllDolls/AllDolls.jsx';
import Details from './compoents/Details/Details.jsx';
import Login from './compoents/LoginReg/Login.jsx';
import Register from './compoents/LoginReg/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import MyDolls from './compoents/MyDolls/MyDolls.jsx';
import UpdateDolls from './compoents/UpdateDolls/UpdateDolls.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'add-a-doll',
        element: <PrivateRoute><AddDoll></AddDoll></PrivateRoute>
      },
      {
        path: 'all-dolls',
        element: <AllDolls></AllDolls>,
        loader: () => fetch('https://doll-shop-server-a11.vercel.app/products')
      },
      {
        path: 'doll/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://doll-shop-server-a11.vercel.app/doll/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'my-dolls',
        element: <MyDolls></MyDolls>
      },
      {
        path: 'update-doll/:id',
        element: <UpdateDolls></UpdateDolls>,
        loader: ({params}) => fetch(`https://doll-shop-server-a11.vercel.app/doll/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
