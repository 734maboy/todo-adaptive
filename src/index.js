import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import MainView from './views/MainView/MainView.js'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView/HomeView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorView/>,
    children: [
      {
        path: "/",
        element: <HomeView/>
      },
      {
        path: "/main",
        element: <MainView/>,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
