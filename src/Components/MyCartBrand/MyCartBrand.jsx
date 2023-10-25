/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const MyCartBrand = ({item, cartItems,setCartItems}) => {

    const {_id,name, brandName, type,price,shortDescription,image,rating,details} = item || {} ;

     
    const handleDelete = _id =>{
       // console.log(_id)
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
            fetch(`https://a10-brand-shop-server-one.vercel.app/cartItems/${_id}`,{
                method :'Delete'
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
            Swal.fire(
           'Deleted!',
            'Your item has been deleted.',
            'success' )
            const remaining = cartItems.filter(item => item._id !== _id)
            setCartItems(remaining) ;
                }
            })
        }
      })
    }

    return (
        <div>
               <div className="card h-full   bg-base-100 mt-8 shadow-xl">
  <figure className="w-full object-cover"><img src={image} className="h-24" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandName}</h2>
    <h2 className="text-lg">{name}</h2>
    <h2>{price}tk</h2>
   <h2>{shortDescription}</h2>
    <div className="card-actions justify-center">
      
      <button onClick={() => handleDelete(_id)} className="btn  mt-4">Delete</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCartBrand;