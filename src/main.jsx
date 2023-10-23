import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Add_Products from './Pages/Add_Products/Add_Products';
import My_Cart from './Pages/My_Cart/My_Cart';
import Login from './Pages/Login/Login';
import BrandSelections from './Pages/BrandSelection/BrandSelections';
import BrandDetails from './Pages/BrandDetails/BrandDetails';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import UpdateBrand from './Pages/UpdateBrand/UpdateBrand';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {
        path: "/",
        element: <Home></Home>,
       
        loader : () => fetch("/data.json")
      },
      {
        path: "/addProducts",
        element:<Add_Products></Add_Products>
       
       
      },
      {
        path: "/updateBrand",
        element :<UpdateBrand></UpdateBrand>,
        loader : ({params}) => fetch(`http://localhost:5000/brandName/${params._id}`)
       
      },
      {
        path:"/myCart",
        element:<My_Cart></My_Cart>,
        loader: () => fetch('http://localhost:5000/cartItem')
       
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path : "/register",
        element: <Register></Register>

      },
      {
        path:"/brandCard/:brandName",
        element: <BrandSelections></BrandSelections>,
        loader : () => fetch("http://localhost:5000/brandName")
      },
      {
        path:"/brandDetails/:_id",
        element: <BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/addToCart/${params._id}`)
      }
    ]
         
   

  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
