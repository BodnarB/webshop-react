import React from 'react'
import './CartPage.css'
import CartItem from '../../Components/CartItem/CartItem'
import EmptyCartImg from '../../Assets/emptycart.png'
import Trendings from '../../Components/Trendings/Trendings'

export default function CartPage({ cartItems, removeProd, addProd, delProd, subtotalPrice, subtotalQty, addToCart, prodTitle }) {
    return (
        <div className='cart-page'>
            <h2 className='cart-h2'>Cart</h2>
            <div className='cart-flex'>
                <div className='cart-list'>
                    {cartItems.length === 0 &&
                        <div className='empty-cart-container'>
                            <img src={EmptyCartImg} alt="" />
                            <p className='empty-cart'>Your cart is empty, maybe check our fancy cakes.</p>
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
            <div className='trendings-cart'>
                <Trendings addToCart={addToCart} prodTitle={prodTitle} />
            </div>
        </div>
    )
}

