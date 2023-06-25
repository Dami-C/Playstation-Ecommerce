import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [Cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = Cart.findIndex(product => product.id === item.id);
            Cart[pos].cantidad += quantity;
            setCart([...Cart]);
        } else {
            setCart([...Cart, {...item, cantidad:quantity}]);
        }
    };

    const removeItem = (id) => {
        const items = Cart.filter(product => product.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return Cart.some(product => product.id === id)
    };

    const cartTotal = () => {
        return Cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumTotal = () => {
        return Cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{Cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;