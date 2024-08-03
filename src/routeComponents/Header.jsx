import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed-menu">
      <div className="nav-area">
        {/* <Link to="/" className="logo">
          <img src={Logo} alt="Logo"/>
        </Link>  */}
        <img src={Logo} alt="Logo" id='logo'/>

        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
