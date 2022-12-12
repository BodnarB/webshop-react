import React from 'react'
import './Cart.css'

export default function Cart() {
    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <p>Cart</p>
                <p>X</p>
            </div>
            <div className='cart-list'>
                <div className='cart-item'>
                    <p>Item</p>
                    <p>1 pc</p>
                    <p>6 $</p>
                </div>
            </div>
        </div>
    )
}
