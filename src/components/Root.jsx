import Navber from "./Navber";
 import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            {/* <h1 className='text-8xl mt-16'>Book Varse</h1> */}
        </div>
    );
};

export default Root;