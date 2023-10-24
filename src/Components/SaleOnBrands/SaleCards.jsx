

const SaleCards = ({brandCards}) => {
    const {_id,name, brandName, type,price,shortDescription,image,rating}= brandCards || {} ;

    return (
        <div>
             <div className="card  relative card-compact h-full w-96 bg-base-100 shadow-xl">
  <figure className=" h-[260px] w-full object-cover "><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandName}</h2>
    <h2 className="card-title">{name}</h2>
  
    <div className="card-actions justify-end">
    <button className="btn w-full">QuickShop</button>
    </div>
  </div>
  <div className="absolute top-1 right-1 bg-red-600 rounded-full border-2">
    <h1 className="text-2xl font-bold p-4 text-white">Sale</h1>
</div>
</div>  




        </div>
    );
};

export default SaleCards;