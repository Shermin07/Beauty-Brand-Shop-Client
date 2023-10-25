
import Swal from 'sweetalert2'


const SingleBrandDetails = ({selectedBrand}) => {
    const {_id,name, brandName, type,price,shortDescription,image,rating,details} = selectedBrand || {} ;

   //console.log(selectedBrand)


    const handleAddToCart = () => {
      
            const cartItem = {
            name: selectedBrand.name,
            brandName: selectedBrand.brandName,
            type: selectedBrand.type,
            price: selectedBrand.price,
            shortDescription: selectedBrand.shortDescription,
            image: selectedBrand.image,
            rating: selectedBrand.rating,
            details: selectedBrand.details,
           
        };
    
        fetch('https://a10-brand-shop-server-911zd5pk6-shermin-sultanas-projects.vercel.app/addToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          Swal.fire('Add your product succesfully');
        })
        .catch((error) => {
            console.error('Error adding to cart:', error);
            Swal.fire('Error', 'Failed to add to cart');
        });
    }
    

  
    return (
        <div>
           <div className="card h-full w-full  bg-base-100 mt-8 shadow-xl">
  <figure className="w-full object-cover"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandName}</h2>
    <h2 className="text-lg">{name}</h2>
    <h2>{price}tk</h2>
    <p>{details}</p>
    <div className="card-actions justify-center">
      
      <button onClick={handleAddToCart} className="btn  mt-4">Add to cart</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleBrandDetails;