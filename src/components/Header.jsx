import './Header.scss'
import { FaHome } from "react-icons/fa";
import Search from './search';

function Header() {
  return (
    <>
        <header className="header">
            <div className="header__logo">
                <FaHome />
            </div>
            <div className="header__text">
                <h1>Todo-list</h1>
            </div>
            <div className="header__search">
                <Search />
            </div>
        </header>
    </>
  );
};

export default Header;