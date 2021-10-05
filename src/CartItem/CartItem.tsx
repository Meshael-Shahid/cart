import Button from "@material-ui/core/Button";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    handleDecrementFromCart: (id: number) => void
    handleRemoveFromCart: (id: number) => void
}

const CartItem: React.FC<Props>= ({ item, addToCart, handleDecrementFromCart, handleRemoveFromCart }) => (
    <Wrapper>
        <div>
            <button onClick={() => handleRemoveFromCart(item.id)} id="removeBTN">Remove</button>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button disabled={item.amount === 1} size="small" disableElevation variant="contained"  onClick={() => handleDecrementFromCart(item.id)}>
                -
                </Button>
                <p>{item.amount}</p>
                <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
                +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem