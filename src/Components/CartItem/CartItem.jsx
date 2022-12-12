import React from 'react'
import './CartItem.css'

export default function CartItem({ cartItems }) {
    return (
        <>
            {cartItems.map(element => {

                return (
                    <div className='cart-item' >
                        <div className='cart-item-name'>
                            <p>1</p>
                            <p>{element.prodTitle}</p>
                        </div>
                        <p>{element.prodPrice} $</p>
                    </div>
                )
            })}

        </>
    )
}
