import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
      
        <div className="max-w-screen-xl mx-auto">
          <Navber></Navber>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;