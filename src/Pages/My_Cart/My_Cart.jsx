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
    
    <div className="grid grid-cols-3 gap-4">
    {
      loadedCartItems?.map(item =><MyCartBrand cartItems = {cartItems} 
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