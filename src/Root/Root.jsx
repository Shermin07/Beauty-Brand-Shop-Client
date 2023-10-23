import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Root = () => {
    return (
      
        <div className="max-w-screen-xl mx-auto">
          <Navber></Navber>
          <Outlet></Outlet>
        </div>
    );
};

export default Root;