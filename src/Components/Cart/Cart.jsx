import React from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'

export default function Cart({ closeCart, hideCart, cartItems, removeProd, addProd }) {

    return (
        <div className={`cart-container ${hideCart}`}>
            <div className='cart-header'>
                <p>Cart</p>
                <button onClick={closeCart} className='cart-close-btn'>X</button>
            </div>
            <div className='cart-list'>
                <CartItem cartItems={cartItems} removeProd={removeProd} addProd={addProd} />
            </div>
        </div>
    )
}
