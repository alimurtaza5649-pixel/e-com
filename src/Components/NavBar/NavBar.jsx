import { IoChevronDown } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"



const NavBar = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" className="logo"><strong>SHOP.CO</strong></Link>
      </div>
      <div className="links">
        <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop <IoChevronDown /></NavLink>
        <NavLink to="/sale" className={({ isActive }) => isActive ? "active" : ""}>On Sale</NavLink>
        <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? "active" : ""}>New Arrival</NavLink>
        <NavLink to="/brand" className={({ isActive }) => isActive ? "active" : ""}>Brand</NavLink>
      </div>
   <div className="search-box">
  <FaSearch className="search-icon" /><input type="text" placeholder="search"  /> 
   </div>
   <div className="icon">
<FaShoppingCart /><FaUser />

   </div>

    </div>
  )
}

export default NavBar
