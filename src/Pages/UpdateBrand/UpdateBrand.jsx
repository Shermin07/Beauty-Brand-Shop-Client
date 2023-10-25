import {  useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBrand = () => {

  const cartItems = useLoaderData();
  console.log(cartItems);
  
  const {name, brandName, type,price,_id,image,rating,details} = cartItems || {} ;


  const { id } = useParams();
  
  const [selectedRating, setSelectedRating] = useState("");

  const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target ;
        const name = form.name.value ;
        const brandName = form.brandName.value ;
        const type = form.type.value ;
        const price = form.price.value ;
       
        const image = form.image.value ;
        const rating = selectedRating;
        
        const updateBrand = {name, brandName, type,price,image,rating} ;
        console.log(updateBrand) ;

        fetch(`https://a10-brand-shop-server-one.vercel.app/brandName/${id}`,{
          method: "PUT",
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(updateBrand)
      })
      .then(res =>res.json())
      .then(data =>{
          console.log(data);
          if(data.modifiedCount >0){
              Swal.fire({
                  title: 'succes!',
                  text: 'Brand updated succesfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
      })
    
   
    }
    return (
        <div>
            <h1 className="text-center font-bold text-3xl ">Update Product</h1>
          <form onSubmit={handleUpdate}>
          <div className="md:ml-0 lg:ml-32 mt-10">
          <div className="lg:flex grid grid-cols-1  mb-4 gap-4 ">
          <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-96" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand name" className="input input-bordered w-96" />
  </label>
</div>
          </div>
           <div className="lg:flex grid grid-cols-1 mb-4 gap-4">

           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
   
  <select className="select select-bordered w-96 " defaultValue={type} name= "type">
      <option disabled selected>Item category</option>
      <option>Perfume</option>
      <option>Blusher</option>
      <option>Lipstick</option>
      <option>Eye liner</option>
      <option>Compact Powder</option>
      <option>Eye Palette</option>
      <option>Eye Shadow</option>
    </select>
  </label>
</div>


            <div className="form-control md:w-1/2 ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-96" />
  </label>
</div>

           </div>
          <div className="lg:flex grid grid-cols-1 gap-4">
        
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-96" />
  </label>
</div>

          </div>
          <h1 className=" mt-7 flex">
            Ratings:<br/>
          <div className="rating rating-md  rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" onClick={(e) => setSelectedRating(e.target.value)} checked />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"  onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"  onClick={(e) => setSelectedRating(e.target.value)} />
</div>
          </h1>
      
         </div>
            <input type="submit" value="Update" className="btn ml-6 lg:ml-80 md:ml-56 xl:ml-96 mb-10 w-96  mt-6 "/> 
          
          </form>
        </div>
    );
};

export default UpdateBrand;