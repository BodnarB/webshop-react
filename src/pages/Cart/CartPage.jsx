import React from 'react'
import './CartPage.css'
import CartItem from '../../Components/CartItem/CartItem'
import EmptyCartImg from '../../Assets/emptycart.png'
import { Link } from 'react-router-dom'
import Arrow from '../../Assets/angles-right-solid.svg'

export default function CartPage({ closeCart, hideCart, cartItems, removeProd, addProd, delProd, subtotalPrice, subtotalQty }) {
    return (
        <div className='cart-page'>
            <h2 className='cart-h2'>Cart</h2>
            <div className='cart-flex'>
                <div className='cart-list'>
                    {cartItems.length === 0 &&
                        <div className='empty-cart-container'>
                            <img src={EmptyCartImg} alt="" />
                            <p className='empty-cart'>Your cart is empty</p>
                            <Link to='/products'><button className='products-btn'>Products <img className='arrow-icon' src={Arrow} alt="" /></button></Link>
                        </div>
                    }
                    <CartItem cartItems={cartItems} removeProd={removeProd} addProd={addProd} delProd={delProd} />
                </div>
                {subtotalQty !== 0 &&
                    <div className='sum-container'>
                        <div className='cart-sum'>
                            <p className='subtotal-text'>Subtotal ({subtotalQty} {subtotalQty === 1 ? <>item</> : <>items</>}):</p>
                            <p className='subtotal-price'>{subtotalPrice} $</p>
                        </div>
                        <button className='checkout-btn'>Proceed to Checkout</button>
                    </div>
                }
            </div>
        </div>
    )
}

