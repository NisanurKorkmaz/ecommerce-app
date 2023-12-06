import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav() {
  return 
    <nav>
        <div className='nav-container'>
            <input type="text" className="search-input" placeholder='Enter your search' />
        </div>
        <div className='profil-container'>
            <a href="#"> </a>
        </div>
    </nav>
  
}

export default Nav