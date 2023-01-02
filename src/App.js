import './reset.css'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import DeletePopup from './Components/DeletePopup/DeletePopup'
import { useState } from 'react'

function App() {
  const [hideCart, setHideCart] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartQty, setCartQty] = useState(0)
  const subT = cartItems.map(item => parseFloat(item.prodPrice))
  const subQty = cartItems.map(item => item.prodQuantity)


  function addToCart(prodTitle, prodPrice) {
    let cart = [...cartItems]
    let catQtyCalc = 0
    if (cart.filter((item) => prodTitle === item.prodTitle).length > 0) {
      let idx = cart.findIndex(prod => prod.prodTitle === prodTitle)
      if (cart[idx].prodQuantity < 30) {
        cart[idx].prodQuantity += 1
        cart[idx].priceOneProd = prodPrice
        cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(2)
      }
    }
    else {
      cart.push({
        prodTitle: prodTitle,
        priceOneProd: prodPrice,
        prodPrice: prodPrice,
        prodQuantity: 1
      })
    }
    cart.forEach(prod => catQtyCalc += prod.prodQuantity)
    setCartQty(catQtyCalc)
    setCartItems(cart)
  }

  function closeCart() {
    hideCart === '' ? setHideCart('show-cart') : setHideCart('')
  }

  function removeProd(prodTitle, prodQuantity) {
    if (prodQuantity > 1) {
      let cart = [...cartItems]
      let catQtyCalc = 0
      let idx = cartItems.findIndex(i => i.prodTitle === prodTitle)
      cart[idx].prodQuantity -= 1
      cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(2)
      cart.forEach(prod => catQtyCalc += prod.prodQuantity)
      setCartQty(catQtyCalc)
      setCartItems(cart)
    }
  }

  function addProd(prodTitle, prodQuantity) {
    if (prodQuantity < 30) {
      let cart = [...cartItems]
      let catQtyCalc = 0
      let idx = cartItems.findIndex(i => i.prodTitle === prodTitle)
      cart[idx].prodQuantity += 1
      cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(2)
      cart.forEach(prod => catQtyCalc += prod.prodQuantity)
      setCartQty(catQtyCalc)
      setCartItems(cart)
    }
  }

  function delProd(prodTitle) {
    let cart = [...cartItems]
    let catQtyCalc = 0
    let idx = cartItems.findIndex(i => i.prodTitle === prodTitle)
    cart.splice(idx, 1)
    cart.forEach(prod => catQtyCalc += prod.prodQuantity)
    setCartQty(catQtyCalc)
    setCartItems(cart)
  }

  return (
    <div className="App">
      <Header cartNum={cartQty} openCart={closeCart} />
      <Cart
        hideCart={hideCart} closeCart={closeCart} cartItems={cartItems}
        removeProd={removeProd} addProd={addProd} delProd={delProd}
        subtotalPrice={subT.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
        subtotalQty={subQty.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
      />
      <DeletePopup />
      <Home addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;