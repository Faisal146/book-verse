
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-3xl" >Opps! Page not Found</h1>
            <br />
            <Link to='/' className="btn btn-primary" >Go home</Link>
        </div>
    );
};

export default Error;