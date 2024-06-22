import {useState, useContext} from 'react';
import {CartContext} from '../../store/context-provider';

import CartItem from './cart-item';

import IconCart from '../../svg/icon-cart';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const {cartContent, removeAllFromCart} = useContext(CartContext);

    let content;
    let cartAmount = 0;

    const deleteHandler = (id) => {
        removeAllFromCart(id);
    };

    if (cartContent.length === 0) {
        content = <p className="cart_text_empty">Your cart is empty</p>
    } else {
        content = <>
            <ul className="cart_list">{cartContent.map(item => {
                return <CartItem product={item} deleteHandler={deleteHandler} key={item.product.id}/>
            })}</ul>
            <a className="cart_link">Checkout</a>
        </>
    };

    cartContent.forEach(item => cartAmount = cartAmount + item.amount);

    return (
        <div className="cart">
            <button className="cart_button" onClick={toggleCart} aria-label="Cart button">
                <IconCart/>
                {cartContent.length ? <p className="cart_badge">{cartAmount}</p> : null}
            </button>
            {isOpen ? 
                <div className="cart_content">
                    <h2 className="cart_title">Cart</h2>
                    {content}
                </div> : null}
        </div>
    );
};

export default Cart;