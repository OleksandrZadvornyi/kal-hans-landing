import { IoIosSearch } from 'react-icons/io';
import { IconContext } from 'react-icons';

function SearchBar() {
  return (
    <div className="flex items-center justify-self-end border-0 lg:border-2">
      <input type="text" className="hidden min-h-10 bg-white lg:block" />
      <IconContext.Provider value={{ size: '1.5em' }}>
        <IoIosSearch className="box-content cursor-pointer pr-5 pl-10" />
      </IconContext.Provider>
    </div>
  );
}

export default SearchBar;
