/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";


const BrandCards = ({brandCard}) => {

    const {_id,name, brandName, type,price,shortDescription,image,rating}= brandCard || {} ;
       
   

    return (
        <div className="">

<Link to={`/brandCard/${brandName}`}><div  className="card h-full  bg-base-100 shadow-xl ">
  <figure className="px-10 h-[260px] object-cover pt-10">
    <img  src={image} alt="cosmetics brands" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brandName}</h2>
  
    
  </div>
</div></Link>

          
        </div>
    );
};

export default BrandCards;