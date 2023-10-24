import { useLoaderData } from "react-router-dom";
import NewStockCards from "./NewStockCards";


const NewStock = (brandCards) => {

    const jsonData = useLoaderData();
    console.log(jsonData);

  

    return (
       <div className="px-7 lg:ml-5 relative mb-[60px] md:mb-6">
         <div className=" pb-[590px] md:pb-56  mt-10 bg-gray-300">
    <h1 className="text-center mt-7 text-3xl">New Stock</h1>
    <p className="text-center mt-4 text-2xl">Discover What's New in Stock!</p>
   
            </div>
         <div className=" absolute top-36 lg:left-10 xl:left-44 gap-7 grid md:grid-cols-3 ">
            {
                jsonData?.slice(3,6).map(brandCards =><NewStockCards key={brandCards._id}
                    brandCards ={brandCards}></NewStockCards>)
            }
       
        </div>
       </div>
    );
};

export default NewStock;