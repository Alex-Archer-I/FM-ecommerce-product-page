const NavMobile = (props) => {
    return (
        <nav className="nav-mobile">
            <button className="nav-mobile_close" aria-label="Close mobile menu" onClick={() => {props.closeButtonHandler(false)}}></button>
            <ul className="nav-mobile_list">
                <li><a href="#" className="nav-mobile_link">Collections</a></li>
                <li><a href="#" className="nav-mobile_link">Men</a></li>
                <li><a href="#" className="nav-mobile_link">Women</a></li>
                <li><a href="#" className="nav-mobile_link">About</a></li>
                <li><a href="#" className="nav-mobile_link">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavMobile;