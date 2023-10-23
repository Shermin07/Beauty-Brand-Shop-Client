

import { useLoaderData } from "react-router";



const My_Cart = () => {

  //const {name, brandName, type,price,shortDescription,image,rating,details} = //selectedBrand || {} ;
//


   const cartItems = useLoaderData()
   console.log(cartItems)


  return (
      <>
     <h1>My Cart</h1>
     {cartItems.length}
    
      </>
            
      
    );
    }

export default My_Cart;