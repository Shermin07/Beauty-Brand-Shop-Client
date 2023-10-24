/* eslint-disable react/prop-types */

import BrandCards from "../BrandCards/BrandCards";


const BrandCardsMap = ({brandCards}) => {
 console.log(brandCards)
   
    return (
        <div className="mt-12">
              <h1 className="text-center font-bold text-3xl">Our curated selection of brands</h1>
              <p className="text-center font-semibold mt-10">Where Color Meets Radiance." Our cosmetics brand is a vibrant fusion of vivid hues and natural radiance. We're dedicated to enhancing your unique beauty with quality and innovation. Explore our radiant range and express your individuality with confidence. Discover your true glow with ChromaGlow Beauty</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12 gap-4">

              
                {
                    brandCards?.map( brandCard => <BrandCards key={brandCard._id} brandCard = {brandCard}>
                    </BrandCards>)
                }
            </div>
        </div>
    );
};

export default BrandCardsMap;