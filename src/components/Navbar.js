import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Navbar() {
    return (
      <nav>
        <img src={logo} />
        <img src={menu} width="20px" />
      </nav>
    );
  }
  
  export default Navbar;