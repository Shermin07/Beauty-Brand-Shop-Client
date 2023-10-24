/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import SaleCards from "./SaleCards";


const SaleOnBrands = ({brandCards}) => {

  

    const jsonData = useLoaderData();
    console.log(jsonData);
    return (

        <div className="lg:ml-5 md:ml-1">
  <div>
            <h1 className="text-center text-4xl font-bold mt-9 mb-10">Sale</h1>
            <p className="text-center mb-10 font-semibold mt-4">Discover your beauty favorites at unbeatable prices! Our cosmetics sale is here, offering you a chance to glam up for less.</p>

<div className="grid md:grid-cols-3 md:gap-5">
    
{
                jsonData?.slice(0,3).map(brandCards =><SaleCards  brandCards={brandCards} >

                </SaleCards>)
            }
</div>
         
        </div>
        <h1 className="text-center mt-6 font-semibold text-md">Beauty is best when it's inclusive ... and everyone loves a bargain. These daringly discounted cosmetics prove that you can be fearless and frugal at the same time. With prices this tempting, why hold yourself back? Grab that glam that you've been eyeing. Stock up on that striking stuff! With discounts this deep, you can't go wrong.Did someone say makeup sale? It's a beauty blowout over here -- with makeup deals that will make both your face and your wallet happy. While these prices are low, the quality is always high. Expect explosive pigmentation, insane color payoff and ultimate staying power -- the Milani signature.

These makeup deals are perfect for electric experimentation. Try that shade you've been stalking and cop that product you keep wondering about. Go on and grab 'em! Sale game strong.
</h1>
        </div>
      
    );
};

export default SaleOnBrands;