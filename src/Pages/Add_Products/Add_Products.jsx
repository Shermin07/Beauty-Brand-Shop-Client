import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Add_Products = () => {
    const [selectedRating, setSelectedRating] = useState(0);

  

    const handleAdded = e =>{
        e.preventDefault();

        const form = e.target ;
        const name = form.name.value ;
        const brandName = form.brandName.value ;
        const type = form.type.value ;
        const price = form.price.value ;
        const shortDescription = form.shortDescription.value ;
        const image = form.image.value ;
        const rating = selectedRating;
        
        const newBrand = {name, brandName, type,price,shortDescription,image,rating} ;
        console.log(newBrand) ;

        fetch("http://localhost:5000/brandName",{
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newBrand)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertId){
                Swal.fire({
                    title: 'succes!',
                    text: 'Brand added succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <h1 className="text-center font-bold text-3xl ">Add Products</h1>
          <form onSubmit={handleAdded}>
          <div className=" ml-32 mt-10">
          <div className="flex mb-4 gap-4 ">
          <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="name"  placeholder="Name" className="input input-bordered w-96" />
  </label>
</div>
            <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="brandName"  placeholder="Brand name" className="input input-bordered w-96" />
  </label>
</div>
          </div>
           <div className="flex mb-4 gap-4">
           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
   
  <select className="select select-bordered w-96" name = "type">
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
  
    <input type="text" name="price"  placeholder="Price" className="input input-bordered w-96" />
  </label>
</div>

           </div>
          <div className="flex gap-4">
          <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Short description</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="shortDescription" placeholder="Short description" className="input input-bordered w-96" />
  </label>
</div>
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
  <input type="radio" name="rating-10" value='0.5'  className="rating-hidden" onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" value='1'  className="bg-green-500 mask mask-star-2 mask-half-1" onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" value='1.5'  className="bg-green-500 mask mask-star-2 mask-half-2"onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" value='2'  className="bg-green-500 mask mask-star-2 mask-half-1" onClick={(e) => setSelectedRating(e.target.value)} checked />
  <input type="radio" name="rating-10"value='2.5'  className="bg-green-500 mask mask-star-2 mask-half-2" onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10"value='3'  className="bg-green-500 mask mask-star-2 mask-half-1"onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" value='3.5'  className="bg-green-500 mask mask-star-2 mask-half-2" onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10" value='4'  className="bg-green-500 mask mask-star-2 mask-half-1" onClick={(e) => setSelectedRating(e.target.value)}/>
  <input type="radio" name="rating-10"value='4.5'  className="bg-green-500 mask mask-star-2 mask-half-2"onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" value='5'  className="bg-green-500 mask mask-star-2 mask-half-1"onClick={(e) => setSelectedRating(e.target.value)} />
  <input type="radio" name="rating-10" value='5.5'  className="bg-green-500 mask mask-star-2 mask-half-2" onClick={(e) => setSelectedRating(e.target.value)}/>
</div>
          </h1>
      
         </div>
            <input type="submit" value="Added" className="btn ml-96 mb-10 w-96  mt-6 "/> 
          
          </form>
        </div>
    );
};

export default Add_Products;