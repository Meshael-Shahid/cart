import { useEffect, useState } from "react";
import axios from "axios";

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom";

//Components
import Item from './Item/Item'
import Cart from './Cart/Cart'
import AdminPanel from "./AdminPanel/AdminPanel";
import Checkout from "./Checkout/Checkout";
import Drawer from '@material-ui/core/Drawer'
// import LinearProgress from "@material-ui/core/LinearProgress";
import ProductDetails from "./ProductDetails/ProductDetails";

//redux
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { RootState } from "./state/reducers";

//material ui
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from "@material-ui/core/Badge";

// //Styles
import { Wrapper, StyledButton } from './App.styles'


//Types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const App = () => {

  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()
  const { setProducts, addProduct } = bindActionCreators(actionCreators, dispatch)
  const [cartOpen, setCartOpen] = useState(false)
  const [ category, setCategory ] = useState ('')
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems( prevItems => {

      const isItemInCart = prevItems.find(item => item.id === clickedItem.id)
      
      if (isItemInCart) {
        return prevItems.map(item => 
          item.id === clickedItem.id
          ? {...item, amount: item.amount + 1}
          : item)
      }

      return [...prevItems, {...clickedItem, amount: 1}]
    })
  }

  const update = () => {

  }
  
  const handleDecrementFromCart = (id: number) => {
    setCartItems( prevItems => 
      prevItems.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack
          return [...ack, {...item, amount: item.amount - 1}]
        } else {
          return [...ack, item]
        }
      },[] as CartItemType[])
    )
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems( prevItems => 
      prevItems.filter( item => {
        return item.id !== id
      })
    )
  }

  const filter = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    setCategory(e.target.value)
  }

  const dataToRender = (category: string): CartItemType[] => {
    if (category === '' || category === 'all') {
      return products
    }
    return products.filter(item => item.category === category)
  }

  const fetchProducts = async () => {
    const response = await axios.get<CartItemType[]>('https://fakestoreapi.com/products').catch((err) => {
      console.log(err)
    })
    if (response) {
      setProducts(response?.data)
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <Router>

      <Switch>

        <Route exact path="/">

          <Wrapper>
            <div>
              <Link id="admin" to="/admin">Admin Panel</Link>
            </div>
            
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
              <Cart cartItems={cartItems} addToCart={handleAddToCart} handleDecrementFromCart={handleDecrementFromCart} handleRemoveFromCart={handleRemoveFromCart}/>
            </Drawer>

            <StyledButton onClick={() => setCartOpen(true)} >
              <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon />
              </Badge>
            </StyledButton>

            <div className="category">
              <select name="category" value={category} onChange={filter}>
                <option value="">Select Category</option>
                <option value="all">All</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
              </select>
            </div>

            <Grid container spacing={3}>
              {dataToRender(category)?.map(item => (
                <Grid item key={item.id} xs={12} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart}/>
                </Grid>
              ))}
            </Grid>
          </Wrapper>
        </Route>

        <Route exact path="/admin">
          <AdminPanel addItem={addProduct} allProducts={products}/>
        </Route>

        <Route exact path="/checkOut">
          <Checkout setCartItems={setCartItems} />
        </Route>

        <Route exact path={"/product/:id"}>
          <ProductDetails products={products}></ProductDetails>
        </Route>
        
      </Switch>

    </Router>
  )
}

export default App