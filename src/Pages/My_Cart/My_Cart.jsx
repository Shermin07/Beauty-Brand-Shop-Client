/* eslint-disable react/jsx-key */


import { useLoaderData } from "react-router";
import MyCartBrand from "../../Components/MyCartBrand/MyCartBrand";



const My_Cart = () => {

  //const {_id,name, brandName, type,price,shortDescription,image,rating,details} = selectedBrand || {} ;



   const cartItems = useLoaderData()
   console.log(cartItems)


  return (
      <>
    
    <div className="grid grid-cols-3 gap-4">
    {
      cartItems?.map(item =><MyCartBrand   item ={item} 
      >

      </MyCartBrand> )
     }
    </div>
    
      </>
            
      
    );
    }

export default My_Cart;