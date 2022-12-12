import './reset.css'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [hideCart, setHideCart] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartQty, setCartQty] = useState(0)


  function addToCart(prodTitle, prodPrice) {
    let cart = [...cartItems]
    let catQtyCalc = 0
    if (cart.filter((item) => prodTitle === item.prodTitle).length > 0) {
      let idx = cart.findIndex(prod => prod.prodTitle === prodTitle)
      cart[idx].prodQuantity += 1
    }
    else {
      cart.push({
        prodTitle: prodTitle,
        prodPrice: prodPrice,
        prodQuantity: 1
      })
    }
    cart.forEach(prod => catQtyCalc += prod.prodQuantity)
    setCartQty(catQtyCalc)
    setCartItems(cart)
    console.log('list', cartItems)
  }

  function closeCart() {
    hideCart === '' ? setHideCart('show-cart') : setHideCart('')
  }

  return (
    <div className="App">
      <Header cartNum={cartQty} openCart={closeCart} />
      <Cart hideCart={hideCart} closeCart={closeCart} cartItems={cartItems} />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
