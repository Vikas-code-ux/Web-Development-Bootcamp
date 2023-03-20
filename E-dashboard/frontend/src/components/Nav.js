import { Link,useNavigate } from "react-router-dom";
import img from "../logo.png";

function Nav(){
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/login');
    }
    return(
        <div>
            <img 
            alt="logo icon"
            className="logo"
            src={img} />
            { auth ?
            <ul className="nav_ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                {/* <li><Link to="/update">Update Products</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                <li className="nav_li_right"><Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name})</Link></li> 
            </ul>
            :
            <ul className="nav_ul nav_ul_right">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;