import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import './index.css'
import './App.css'
import Root from './components/Root';
import Error from './components/Error';
import Home from './components/Home';
import Listed from './Listed';
import PagesToRead from './PagesToRead';
import Details from './components/Details';
import Wishlist from './components/Wishlist';
import Readlist from './components/Readlist';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/lists',
        element : <Listed></Listed>,
        children: [
          {
            path : '/lists/wishlist',
            element : <Wishlist></Wishlist>,
            loader : () => fetch('../books.json')
          },
          {
            path : '/lists/readlist',
            element : <Readlist></Readlist>,
            loader : () => fetch('../books.json')
          },
        ]
      },
      {
        path : '/pages',
        element : <PagesToRead></PagesToRead>,
        loader : () => fetch('../books.json')
      },
      {
        path : '/details/:id',
        element : <Details></Details>,
        loader : () => fetch('../books.json')
      },
    ]
    
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
