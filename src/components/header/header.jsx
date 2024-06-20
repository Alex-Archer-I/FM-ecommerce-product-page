import NavDesk from './nav-desk';
import Cart from './cart';

import Logo from '../svg/logo';
import IconMenu from '../svg/icon-menu';

const Header = () => {
    return (
        <header className="header">
            <button className="header_menu_button">
                <IconMenu/>
            </button>
            <a href="#"><Logo/></a>
            <NavDesk/>
            <Cart/>
            <a href="#" className="header_profile">
                <img src="./images/image-avatar.png" alt="" className="header_profile_picture"/>
            </a>
        </header>
    );
};

export default Header;