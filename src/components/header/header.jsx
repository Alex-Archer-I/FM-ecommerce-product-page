import {useState} from 'react';

import NavDesk from './nav/nav-desk';
import NavMobile from './nav/nav-mobile';
import Cart from './cart/cart';

import Logo from '../svg/logo';
import IconMenu from '../svg/icon-menu';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMobileMenu = (open) => {
        setOpenMenu(open);
    };

    return (
        <header className="header">
            <div className="header_wrapper">
                <button className="header_menu_button" onClick={() => toggleMobileMenu(true)}>
                    <IconMenu/>
                </button>
                <a href="#"><Logo/></a>
                {openMenu ? <NavMobile closeButtonHandler={toggleMobileMenu}/> : null}
                <NavDesk/>
            </div>
            <div className="header_wrapper">
                <Cart/>
                <a href="#" className="header_profile">
                    <img src="./images/image-avatar.png" alt="" className="header_profile_picture"/>
                </a>
            </div>
        </header>
    );
};

export default Header;