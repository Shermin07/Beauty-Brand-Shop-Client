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
import PrivateRoute from './PrivateRoute';
import SingleBrandDetails from './Components/SingleBrandDetails/SingleBrandDetails';
import Error from './Components/Error/Error';

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
        element:<PrivateRoute><Add_Products></Add_Products></PrivateRoute>
       
       
      },
      {
        path: "/updateBrand/:id",
        element :<PrivateRoute><UpdateBrand></UpdateBrand></PrivateRoute>,
        loader : ({params}) => fetch(`https://a10-brand-shop-server-911zd5pk6-shermin-sultanas-projects.vercel.app/brandName/${params._id}`)

       
      },
      {
        path:"/myCart",
        element:<PrivateRoute><My_Cart></My_Cart></PrivateRoute>,
        loader: () => fetch('https://a10-brand-shop-server-911zd5pk6-shermin-sultanas-projects.vercel.app/cartItem')
       
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path : "/register",
        element: <Register></Register>

      },
      {path: '/singleBrandDetails/:_id',
      element :<PrivateRoute><SingleBrandDetails></SingleBrandDetails></PrivateRoute>

      },
      {
        path:"/brandCard/:brandName",
        element: <BrandSelections></BrandSelections>,
        loader : () => fetch("https://a10-brand-shop-server-911zd5pk6-shermin-sultanas-projects.vercel.app/brandName")
      },
      {
        path:"/brandDetails/:_id",
        element: <BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`https://a10-brand-shop-server-911zd5pk6-shermin-sultanas-projects.vercel.app/addToCart/${params._id}`)
      },
      {
        path:"*",
        element: <Error></Error>
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
