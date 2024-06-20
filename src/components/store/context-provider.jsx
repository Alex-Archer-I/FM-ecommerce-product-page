import React, {useState} from 'react';

import productData from '../../assets/data/product-data';

const CartContext = React.createContext();

const ContextProvider = (props) => {
    const [cartContent, setCartContent] = useState([]);

    const addNewToCart = (id) => {
        let product;

        for (const item of productData) {
            if (item.id === id) {
                product = item;
                break;
            };
        };

        const tempCart = [...cartContent];

        tempCart.push({product: {...product}, amount: 1});

        setCartContent(tempCart);
        console.log(cartContent);
    };

    const manageProductAmount = (id, add) => {
        const tempCart = [...cartContent];

        tempCart.forEach(item => {
            if (item.product.id === id) {
                if (add) {
                    item.amount++;
                } else {
                    item.amount--;
                };
            };
        });

        setCartContent(tempCart);
        console.log(cartContent);
    };

    const removeAllFromCart = (id) => {
        const tempCart = [...cartContent];

        const newTempCart = tempCart.filter(item => {
            return item.product.id !== id;
        });

        setCartContent(newTempCart);
        console.log(cartContent);
    };

    return (
        <CartContext.Provider value={{cartContent, addNewToCart, manageProductAmount, removeAllFromCart}}>{props.children}</CartContext.Provider>
    );
};

export {CartContext, ContextProvider};