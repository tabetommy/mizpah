import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <ul className="menus">
        <li className="menu-items">
         <Link to='/contact-us' className="btn text-white" >Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
