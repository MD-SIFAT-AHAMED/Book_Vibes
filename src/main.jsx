import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,}from "react-router";
import Root from './Components/Root/Root.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Home from './Components/Home/Home.jsx';
import BooksDetails from './Components/BookDetails/BooksDetails.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/book/:bookId',
        loader:(()=> fetch('Books.json')),
        element:<BooksDetails></BooksDetails>
      }
      ,
      {
        path:'/listedBook',
        loader:(()=> fetch("Books.json")),
        element:<ListedBook></ListedBook>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
