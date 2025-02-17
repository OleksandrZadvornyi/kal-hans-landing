import { IoIosSearch } from "react-icons/io";
import { IconContext } from "react-icons";

function SearchBar() {
  return (
    <div className="flex items-center justify-center border-2 justify-self-end">
      <input type="text" className="bg-white min-h-10" />
      <IconContext.Provider value={{ size: "1.5em" }}>
        <IoIosSearch className="pl-10 pr-5 cursor-pointer box-content" />
      </IconContext.Provider>
    </div>
  );
}

export default SearchBar;
