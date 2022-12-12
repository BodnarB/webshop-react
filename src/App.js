import './reset.css'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cartItems, setCartItems] = useState([])
  const [hideCart, setHideCart] = useState('')
  function addToCart(prodTitle, prodPrice) {
    setCartItems([...cartItems, { prodTitle, prodPrice }])
    console.log(cartItems)
  }


  function closeCart() {
    hideCart === '' ? setHideCart('show-cart') : setHideCart('')
  }

  return (
    <div className="App">
      <Header cartNum={cartItems.length} openCart={closeCart} />
      <Cart hideCart={hideCart} closeCart={closeCart} cartItems={cartItems} />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
