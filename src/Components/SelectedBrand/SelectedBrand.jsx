import { Link, useLoaderData } from "react-router-dom";
import BrandDetails from "../../Pages/BrandDetails/BrandDetails";



const SelectedBrand = ({selectedBrand}) => {

    const {_id,name, brandName, type,price,shortDescription,image,rating} = selectedBrand || {} ;

    const brandsCards = useLoaderData([]);
   

    //console.log(selectedBrand)
    


    return (
        <div>
           <div className="">
           <div className="card   md:ml-0 w-full  bg-base-100 h-full shadow-xl">
  <figure className="h-[250px] object-cover"><img src={image} alt="Brands" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
    
    </h2>
    <p>{brandName}</p>
    <p>{type}</p>
   
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price} tk</div> 
      <div className="badge badge-outline">{rating}</div>
     
    </div>
    <Link to={`/brandDetails/${_id}`} className="btn " >Details</Link><br/>
               <Link  to="/updateBrand" className="btn " >Update</Link>
  </div>
</div>

           </div>
           

        
        </div>
    );
};

export default SelectedBrand;