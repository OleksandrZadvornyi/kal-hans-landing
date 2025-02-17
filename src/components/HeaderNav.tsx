import { HiBars3 } from "react-icons/hi2";
import { MdShoppingBasket } from "react-icons/md";
import { IconContext } from "react-icons";
import SearchBar from "./SearchBar";
import logo from "../assets/images/logo.png";

function HeaderNav() {
  return (
    <div className="bg-primary flex justify-between items-center p-6 relative">
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <div className="flex-grow cursor-pointer">
          <HiBars3 />
        </div>
      </IconContext.Provider>
      <img
        src={logo}
        alt="Kal Hans Logo"
        width="200"
        height="42"
        className="absolute m-auto left-0 right-0"
      />
      <SearchBar />
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div className="ml-10 cursor-pointer">
          <MdShoppingBasket />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default HeaderNav;
