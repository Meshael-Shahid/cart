import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//Types
import { CartItemType } from "../App";

//Styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {

    let description = item.description
    if (item.description.length >= 100) {
        description = item.description.substring(0, 100) + '...'
    }


    return (
        <Wrapper>
            <Link id="item" to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{description}</p>
                    <h3>$ {item.price}</h3>
                </div>
            </Link>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}

export default Item