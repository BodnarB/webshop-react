import './reset.css'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cartItems, setCartItems] = useState([])

  function addToCart(prodTitle, prodPrice) {
    setCartItems([...cartItems, prodTitle])
    console.log(prodTitle, prodPrice)
  }

  return (
    <div className="App">
      <Header cartNum={cartItems.length} />
      <Cart />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
