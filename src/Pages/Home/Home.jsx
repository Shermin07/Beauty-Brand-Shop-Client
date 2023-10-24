import { useLoaderData } from "react-router-dom";

import Header from "../../Components/Header/Header";

import BrandCardsMap from "../../Components/BrandCardMap/BrandCardsMap";
import SaleOnBrands from "../../Components/SaleOnBrands/SaleOnBrands";


const Home = () => {

    const brandCards = useLoaderData();
    //console.log(brandCards);
    return (
        <div>
          
            <Header></Header>
           <div >
          <BrandCardsMap brandCards={brandCards}></BrandCardsMap>

           </div>
           <div>
            <SaleOnBrands brandCards={brandCards}  ></SaleOnBrands>
           </div>
        </div>
    );
};

export default Home;