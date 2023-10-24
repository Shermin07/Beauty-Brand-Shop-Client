import { useLoaderData } from "react-router-dom";

import Header from "../../Components/Header/Header";

import BrandCardsMap from "../../Components/BrandCardMap/BrandCardsMap";
import SaleOnBrands from "../../Components/SaleOnBrands/SaleOnBrands";
import NewStock from "../../Components/NewStock/NewStock";
import Marquee from "react-fast-marquee";



const Home = () => {

    const brandCards = useLoaderData();
    //console.log(brandCards);
    return (
        <div >
          
            <Header></Header>
            <Marquee className="mt-6">
             <div className="grid grid-cols-5  gap-7">
                <img className="h-20" src="https://miro.medium.com/v2/resize:fit:493/1*Jgm16dOFfTUPVx8OZwVr2A.png"></img>
                <img className="h-20" src="https://agence33degres.com/wp-content/uploads/2018/05/shutterstock_1050298601.jpg"></img>
                <img className="h-20" src="https://wallpapers.com/images/hd/chanel-logo-pictures-8dp0v8zdny2rjeju.jpg"></img>
                <img className="h-20" src="https://1000logos.net/wp-content/uploads/2020/05/Logo1-Estee-Lauder.jpg"></img>
                <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKg0cgSy0groJ2ug8-bcgcrf2Cj3MrmJ5-oXawgUAoIw&s"></img>
             </div>
            </Marquee>
           <div >
          <BrandCardsMap brandCards={brandCards}></BrandCardsMap>

           </div>
           <div>
            <SaleOnBrands brandCards={brandCards}  ></SaleOnBrands>
           </div>
           <div>
            <NewStock  brandCards={brandCards}></NewStock>
           </div>

          
        </div>
    );
};

export default Home;