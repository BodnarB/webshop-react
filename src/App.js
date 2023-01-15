import './reset.css'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Products from './pages/Products/Products'
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import CartPage from './pages/Cart/CartPage'

function App() {
  const [hideCart, setHideCart] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [cartQty, setCartQty] = useState(0)
  const subT = cartItems.map(item => parseFloat(item.prodPrice))
  const subQty = cartItems.map(item => item.prodQuantity)

  function addToCart(prodTitle, prodPrice, imgSrc) {
    let cart = [...cartItems]
    let catQtyCalc = 0
    if (cart.filter((item) => prodTitle === item.prodTitle).length > 0) {
      let idx = cart.findIndex(prod => prod.prodTitle === prodTitle)
      if (cart[idx].prodQuantity < 20) {
        cart[idx].prodQuantity += 1
        cart[idx].priceOneProd = prodPrice
        cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(1)
      }
    }
    else {
      cart.push({
        prodTitle: prodTitle,
        priceOneProd: prodPrice,
        prodPrice: prodPrice,
        prodQuantity: 1,
        imgSrc: imgSrc
      })
    }
    cart.forEach(prod => catQtyCalc += prod.prodQuantity)
    setCartQty(catQtyCalc)
    setCartItems(cart)
  }

  function closeCart() {
    window.scrollTo({ top: 0 })
    hideCart === '' ? setHideCart('show-cart') : setHideCart('')
  }

  function removeProd(prodTitle, prodQuantity) {
    if (prodQuantity > 1) {
      let cart = [...cartItems]
      let catQtyCalc = 0
      let idx = cartItems.findIndex(i => i.prodTitle === prodTitle)
      cart[idx].prodQuantity -= 1
      cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(1)
      cart.forEach(prod => catQtyCalc += prod.prodQuantity)
      setCartQty(catQtyCalc)
      setCartItems(cart)
    }
  }

  function addProd(prodTitle, prodQuantity) {
    if (prodQuantity < 20) {
      let cart = [...cartItems]
      let catQtyCalc = 0
      let idx = cartItems.findIndex(i => i.prodTitle === prodTitle)
      cart[idx].prodQuantity += 1
      cart[idx].prodPrice = (cart[idx].priceOneProd * cart[idx].prodQuantity).toFixed(1)
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
    <HashRouter>
      <div className="App">
        <Header cartNum={cartQty} openCart={closeCart} />
        <Routes>
          <Route exact path='/' element={<Home addToCart={addToCart} />} />
          <Route path='/cart' element={<CartPage
            cartItems={cartItems}
            removeProd={removeProd} addProd={addProd} delProd={delProd}
            subtotalPrice={subT.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(1)}
            subtotalQty={subQty.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
            addToCart={addToCart} />} />
          <Route path='/products' element={<Products addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;