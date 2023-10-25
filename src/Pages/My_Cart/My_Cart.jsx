/* eslint-disable react/jsx-key */


import { useLoaderData } from "react-router";
import MyCartBrand from "../../Components/MyCartBrand/MyCartBrand";
import { useState } from "react";



const My_Cart = () => {

  //const {_id,name, brandName, type,price,shortDescription,image,rating,details} = selectedBrand || {} ;



   const loadedCartItems = useLoaderData()
   

   const [ cartItems, setCartItems] = useState(loadedCartItems); 


  return (
      <>

      <h1 className="text-center text-2xl mt-12 font-bold">Here your added brand</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
    {
      cartItems?.map(item =><MyCartBrand cartItems = {cartItems} 
        setCartItems = {setCartItems}
         item ={item} 
      >

      </MyCartBrand> )
     }
    </div>
    
      </>
            
      
    );
    }

export default My_Cart;