import { Link } from "react-router-dom";
import { CartItemType } from '../App'
import { Wrapper } from "./Checkout.styles";

type Props = {
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}


const Checkout: React.FC<Props> = ({ setCartItems }) => {

    const handleCheckOut = () => {
        alert('Your order has been placed')
        setCartItems([])
    }
    
    return (
        <Wrapper>
                <h2>Billing Address</h2>
            <div className="mainDIV">
                <input type="text" placeholder="Full Name"/>
                <br />
                <input type="email" placeholder="Email"/>
                <br />
                <input type="text" placeholder="Address"/>
                <br />
                <input type="text" placeholder="City"/>
                <br />
                <input type="number" placeholder="Zip"/>
                <br />
                <input type="text" placeholder="State"/>
                <br /><br />
                <Link className="BTNS" onClick={handleCheckOut} to="/">Check Out</Link>
                <div id="betweenBTNS"></div>
                <Link  className="BTNS cancelBTN" to="/">Cancel Order</Link>
            </div>
        </Wrapper> 
    )
}
export default Checkout 