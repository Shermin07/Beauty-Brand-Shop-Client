/* eslint-disable no-undef */
import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import SelectedBrand from "../../Components/SelectedBrand/SelectedBrand";


const BrandSelections = () => {

   


    const [selectedBrand, setSelectedBrand] = useState([]) ;

    const brandCards = useLoaderData();
    console.log(selectedBrand);

    const {brandName} = useParams();

    useEffect( () =>{
        const findBrand = brandCards?.filter(brandCard => brandCard.brandName == brandName)
        //console.log(findBrand)
        setSelectedBrand(findBrand) ;
    }, 
         [brandName, brandCards])
         //console.log(selectedBrand);
    return (
        <div>
          
          <div>
            <h1 className="text-center font-bold text-3xl mt-8 mb-2">Advertisement</h1>
          <div className="carousel md:w-[650px] md:h-[300px]  lg:h-[500px] lg:w-[800px] md:ml-16 lg:ml-28 xl:ml-60  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://media.istockphoto.com/id/1418265792/photo/cosmetics-swatches-peach-beige-red-and-coral-toned-styled-cosmetics-flat-lay-closeup-colour.webp?b=1&s=170667a&w=0&k=20&c=dI1HUlVgdzkNSi9fCedF8h3XcZewQoKlQnANePon0fU=" className="w-full h-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.webp?b=1&s=170667a&w=0&k=20&c=KaMxlCh3jPwMVTfYnQld8mywn8ox5kIJ9vA3NgEFXnY=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/914575350/fi/valokuva/tytt%C3%B6-tekee-silm%C3%A4t-salongissa.jpg?s=612x612&w=0&k=20&c=xQl6j89r_zaE_vTIXj0xcLVFcQJ2l4de08ltCgo8BgA=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1414823181/photo/looking-for-inner-peace-woman-picking-lavender-and-smelling-flowers.webp?b=1&s=170667a&w=0&k=20&c=XBbsyzxBDI10tMwep9W8P9aBZxSS0RmVA2FwzkNQo_0=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<h1 className="text-center text-2xl font-bold mt-6"> Favourite Brands Products</h1>
         
               <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-5">
                {
                    selectedBrand.map(selectedBrand => <SelectedBrand key={selectedBrand.brandName} selectedBrand={selectedBrand}>

                    </SelectedBrand>)
                }
               </div>
             
          </div>
           
        </div>
    );
};

export default BrandSelections;