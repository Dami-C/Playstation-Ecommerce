import cart from "./images/bag.svg"
const CartWidget = () => {
    return (
        <div>
            <img width="30px" src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget