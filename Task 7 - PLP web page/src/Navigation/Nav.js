import{AiOutlineHeart} from 'react-icons/ai';
import{AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
import logo from '../img/logo.jpg'
import "./Nav.css";

const Nav = ({ handleInputChange, query }) =>{
  return (
  <nav>
    <div className="logo-container">
      <img src={logo} />
    </div>
    <div className = "nav-container">
      <input type = "text" 
             className = "search - input"
             placeholder = "Enter your search" 
             onChange={handleInputChange}
             value={query}
      />
    </div>

    <div className = "profile-container">
      <a href = "#">
        <AiOutlineHeart className = "nav-icons" />
      </a>

      <a href="#">
        <AiOutlineShoppingCart className = "nav-icons"/>
      </a>

      <a href="#">
        <AiOutlineUserAdd className = "nav-icons"/>
      </a>
    </div>
  </nav>
  );
};

export default Nav;
