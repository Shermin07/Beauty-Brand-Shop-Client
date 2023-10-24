

const NewStockCards = ({brandCards}) => {
    const {_id,name, brandName, type,price,shortDescription,image,rating}= brandCards || {} ;
    return (
        <div >
              
              <div className="card lg:ml-0 md:ml-5 ml-16 w-56 h-40 md:w-48 md:h-48 lg:w-72 lg:h-48  shadow-xl image-full">
  <figure className=" object-cover"><img src={image} alt="brands" /></figure>
  <div className="card-body ">
    <h2 className="card-title">{brandName}</h2>
    <p className="h-4 hidden md:hidden object-cover">{shortDescription}</p>
    <div className="card-actions  justify-center">
      <button className="px-4 bg-white rounded-md mt-3 text-green-700  ">Shop Now</button>
    </div>
  </div>
  <div className="absolute top-1 right-1 bg-green-600 rounded-full border-2">
    <h1 className="text-xl font-bold p-2 text-white">New</h1>
</div>
</div>


 
        </div>
    );
};

export default NewStockCards;