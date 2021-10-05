import { CartItemType } from "../App"
import { useParams } from "react-router-dom"
import { Wrapper } from "./ProductDetails.styles"

type Props = {
    products: CartItemType[]
}

const ProductDetails: React.FC<Props>= ({ products }) => {

    const { id } = useParams<{id: string}>();
    const product = products.find(item => item.id === +id)

    if (product) {

        return (
            <Wrapper>
                <div className="centerDiv">
                    <h2>Product Details</h2>
                    <br />
                    <img src={product.image} alt={product.title} />
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <h3>Price: ${product.price}</h3>
                </div>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <div className="centerDiv">
                    <h2>Product Details</h2>
                    <p id="noProduct">No such product found!</p>
                </div>
            </Wrapper>
        )
    }
}

export default ProductDetails