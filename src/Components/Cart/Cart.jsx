import React from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import EmptyCartImg from '../../Assets/emptycart.png'

export default function Cart({ closeCart, hideCart, cartItems, removeProd, addProd, delProd, subtotalPrice, subtotalQty }) {

    return (
        <div className={`cart-container ${hideCart}`}>
            <div className='cart-header'>
                <p>Cart</p>
                <button onClick={closeCart} className='cart-close-btn'>X</button>
            </div>
            <div className='cart-list'>
                {cartItems.length === 0 &&
                    <div className='empty-cart-container'>
                        <img src={EmptyCartImg} alt="" /><p className='empty-cart'>Your cart is empty</p>
                    </div>
                }
                <CartItem cartItems={cartItems} removeProd={removeProd} addProd={addProd} delProd={delProd} />
            </div>
            {subtotalQty !== 0 &&
                <>
                    <div className='cart-sum'>
                        <p className='subtotal-text'>Subtotal ({subtotalQty} {subtotalQty === 1 ? <>item</> : <>items</>}):</p>
                        <p className='subtotal-price'>{subtotalPrice} $</p>
                    </div>
                    <button className='checkout-btn'>Proceed to Checkout</button>
                </>
            }
        </div>
    )
}
