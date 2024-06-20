import IconDelete from '../svg/icon-delete';

const CartItem = ({product, deleteHandler}) => {
    const imgSrc = `./images/${product.product.images.pictures[0].path}`;

    const totalPrice = +product.product.price.match(/\d+/) * +product.amount;

    return (
        <li className="cart_item">
            <img src={imgSrc} alt="" className="cart_item_image"/>
            <p className="cart_item_text">
                <span>{product.product.title}</span>
                <span><span>{product.product.price}</span> x <span>{product.amount}</span> <span className="cart_item_text-bold">${totalPrice}</span></span>
            </p>
            <button className="cart_item_delete" onClick={() => {deleteHandler(product.product.id)}}><IconDelete/></button>
        </li>
    );
};

export default CartItem;