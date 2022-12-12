import React from 'react'
import './CartItem.css'

export default function CartItem({ cartItems }) {
    return (
        <>
            {cartItems.map((element,index) => {
                return (
                    <div key={index} className='cart-item' >
                        <div className='cart-item-name'>
                            <p>{element.prodQuantity}</p>
                            <p>{element.prodTitle}</p>
                        </div>
                        <p>{element.prodPrice} $</p>
                    </div>
                )
            })}

        </>
    )
}
