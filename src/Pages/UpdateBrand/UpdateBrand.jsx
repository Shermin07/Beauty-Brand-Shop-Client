import { useState } from "react";


const UpdateBrand = () => {

    const [selectedRating,setSelectedRating] = useState()

    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target ;
        const name = form.name.value ;
        const brandName = form.brandName.value ;
        const type = form.type.value ;
        const price = form.price.value ;
       
        const image = form.image.value ;
        const rating = selectedRating;
        
        const newBrand = {name, brandName, type,price,image,rating} ;
        console.log(newBrand) ;

   
    }
    return (
        <div>
            <h1 className="text-center font-bold text-3xl ">Update Product</h1>
          <form onSubmit={handleUpdate}>
          <div className=" ml-32 mt-10">
          <div className="flex mb-4 gap-4 ">
          <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="name" placeholder="Name" className="input input-bordered w-96" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="brandName" placeholder="Brand name" className="input input-bordered w-96" />
  </label>
</div>
          </div>
           <div className="flex mb-4 gap-4">

           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
   
  <select className="select select-bordered w-96 " name= "type">
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


            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="price" placeholder="Price" className="input input-bordered w-96" />
  </label>
</div>

           </div>
          <div className="flex gap-4">
        
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-96" />
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
            <input type="submit" value="Update" className="btn ml-96 mb-10 w-96  mt-6 "/> 
          
          </form>
        </div>
    );
};

export default UpdateBrand;