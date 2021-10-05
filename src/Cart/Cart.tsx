import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[]
    handleRemoveFromCart: (id: number) => void
    addToCart: (clickedtem: CartItemType) => void
    handleDecrementFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, handleDecrementFromCart, handleRemoveFromCart}) => {

    //ack is accumulated price for products in the cart 
    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

    const handleProceed = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (calculateTotal(cartItems) === 0) {
            alert('Select some item from shop first.')
            e.preventDefault()
        }
    }

    return (
        <Wrapper>

            <div className="centerDIV">
                <h2>Your Shopping Cart</h2>
            </div>

            {cartItems.length === 0 ? <div className="centerDIV">
                <p id="noItems">No items in cart!</p>
            </div> : null}
            {cartItems.map( item => (
                <CartItem item={item} addToCart={addToCart} handleDecrementFromCart={handleDecrementFromCart} handleRemoveFromCart={handleRemoveFromCart}/>
            ))}

            <div className="centerDIV">
                <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>

            <div className="centerDIV topMargin">
            <Link id="proceedBTN" to="checkOut" onClick={handleProceed}>Proceed</Link>
            </div>
            
        </Wrapper>
    )
}

export default Cart