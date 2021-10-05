import { useState } from "react"
import { CartItemType } from '../App'
import { Wrapper } from "./AdminPanel.styles"
import { Link } from "react-router-dom";

type Props = {
    allProducts: CartItemType[]
    addItem: (newItem: CartItemType) => void
}

const AdminPanel: React.FC<Props> = ({ addItem, allProducts }) => {
    console.log(allProducts)
    const [ input, setInput ] = useState ({
        title: '',
        price: 0,
        description: '',
        category: '',
        img: ''
    })

    //generates randon number of length 7. First digit is never zero.
    const generateRandomNumber = (): number => Math.floor(100000 + Math.random() * 9000000)

    //checks if generated product id is unique or not. If not unique then generates a new one until a unique one is found.
    const calculateProductID = (products: CartItemType[]): number => {

        const productID = generateRandomNumber()
        const isPresent = products.find(product => product.id === productID)

        if (isPresent) {
            return calculateProductID(products)
        }
        return productID
    }
    
    const isTitlePresent = (products: CartItemType[], title: string) => products.find(product => product.title.toLocaleLowerCase() === title.toLocaleLowerCase())

    const isUrlValid = (url: string) => {
        const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(url))
        {
          return true;
        }
        else
        {
          return false;
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAddProduct = () => {

        if (input.title === '' || input.price === 0 ||input.description === '' ||input.category === '' ||input.img === '') {
            alert('Fill all the fields')
            return
        }

        if (isTitlePresent(allProducts, input.title)) {
            alert('Product title already exists')
            return
        }

        if (!isUrlValid(input.img)) {
            alert('Image url is not valid')
            return
        }

        const productID = calculateProductID(allProducts)

        addItem({
            id: productID,
            title: input.title,
            price: +(+input.price).toFixed(2),
            description: input.description,
            category: input.category,
            image: input.img,
            amount: 0
        });

        setInput({
            title: '',
            price: 0,
            description: '',
            category: '',
            img: ''
        })
        
        alert('New product added')
    }

    return (
        <Wrapper>
            <h2>Admin Panel</h2>

            <div>
                <Link id="shop" to="/">Shop</Link>

                <h3>ADD PRODUCTS</h3>

                <br />
                <input type="text"  placeholder="Title" name="title" value={input.title} onChange={handleChange}/>
                <br />
                <input type="number" min='0' placeholder="Price" name="price" value={input.price} onChange={handleChange}/>
                <br />
                <input type="text"  placeholder="Description" name="description" value={input.description} onChange={handleChange}/>
                <br />
                <input type="text"  placeholder="Image Link" name="img" value={input.img} onChange={handleChange}/>
                <br />
                
                <select name="category" value={input.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                </select>

                <br /> <br />

                <button onClick={handleAddProduct}>Add Product</button>

            </div>
        </Wrapper>
    )
}

export default AdminPanel