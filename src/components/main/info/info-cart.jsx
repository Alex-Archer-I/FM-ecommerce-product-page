import {useContext} from 'react';

import {CartContext} from '../../store/context-provider';

import IconPlus from '../../svg/icon-plus';
import IconMinus from '../../svg/icon-minus';

const InfoCart = (props) => {
    const {cartContent, addNewToCart, manageProductAmount, removeAllFromCart} = useContext(CartContext);

    let amount = 0;

    for (const item of cartContent) {
        if (props.productId === item.product.id) {
            amount = item.amount;
            break;
        };
    };

    const plusButtonHandler = () => {
        if (amount === 0) {
            addNewToCart(props.productId);
        } else {
            manageProductAmount(props.productId, true);
        };
    };

    const minusButtonHandler = () => {
        if (amount === 1) {
            removeAllFromCart(props.productId);
        } else {
            manageProductAmount(props.productId, false);
        };
    };

    return (
        <div className="cart_actions">
            <button className="cart_actions_button" onClick={minusButtonHandler}><IconMinus/></button>
                <p className="cart_actions_text">{amount}</p>
            <button className="cart_actions_button" onClick={plusButtonHandler}><IconPlus/></button>
        </div>
    );
};

export default InfoCart;