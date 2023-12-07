import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import OrderReview from './Components/Order/OrderReview.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`generated.json`)
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>

      }
      ,
      {
        path: 'about',
        element: <About></About>

      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
