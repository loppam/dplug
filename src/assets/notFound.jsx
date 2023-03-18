import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page cannot be found</p>
            <Link to={"/"} className="add"><AiOutlineHome style={{backgroundColor: "#747bff", padding: "10px", borderRadius: '5vw', fontSize: '6vw'} }/></Link>
        </div>
    );
}
 
export default NotFound;