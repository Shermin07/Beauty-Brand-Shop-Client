import { useLoaderData} from "react-router-dom";
import SingleBrandDetails from "../../Components/SingleBrandDetails/SingleBrandDetails";



const BrandDetails = ({selectedBrand}) => {

    const detailsData = useLoaderData();
    //console.log(detailsData);

    

   


    return (
        <div>
 <SingleBrandDetails selectedBrand={detailsData}></SingleBrandDetails>
        </div>
    );
};

export default BrandDetails;