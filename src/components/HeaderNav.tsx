import { HiBars3 } from 'react-icons/hi2';
import { MdShoppingBasket } from 'react-icons/md';
import { IconContext } from 'react-icons';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';

function HeaderNav() {
  return (
    <div className="bg-primary relative flex items-center justify-between p-6">
      <IconContext.Provider value={{ color: 'white', size: '2em' }}>
        <div className="flex-grow cursor-pointer">
          <HiBars3 />
        </div>
      </IconContext.Provider>
      <img
        src={logo}
        alt="Kal Hans Logo"
        width="200"
        height="42"
        className="absolute right-0 left-0 m-auto"
      />
      <SearchBar />
      <IconContext.Provider value={{ size: '1.5em' }}>
        <div className="ml-10 cursor-pointer">
          <MdShoppingBasket />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default HeaderNav;
