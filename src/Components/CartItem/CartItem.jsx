import React from 'react'
import './CartItem.css'
import PlusBtn from '../../Assets/plus-lg.svg'
import MinusBtn from '../../Assets/dash-lg.svg'
import DelBtn from '../../Assets/trash3.svg'

export default function CartItem({ cartItems, removeProd, addProd }) {
    return (
        <>
            {cartItems.map((element, index) => {
                return (
                    <div key={index} className='cart-item' >
                        <div className='cart-prod-text-container'>
                            <p className='cart-item-name'>{element.prodTitle}</p>
                            <p className='prod-price'>{element.prodPrice} $</p>
                        </div>
                        <div className='prod-btns-container'>
                            <div className='qty-btns'>
                                <p className='qty-text'>Qty</p>
                                <div className='prod-qty-container'>
                                    <button className='prod-qty-btn' onClick={() => { removeProd(element.prodTitle, element.prodQuantity) }}>
                                        <img className='prod-qty-icon' src={MinusBtn} alt="" />
                                    </button>
                                    <p>{element.prodQuantity}</p>
                                    <button className='prod-qty-btn' onClick={() => { addProd(element.prodTitle, element.prodQuantity) }}>
                                        <img className='prod-qty-icon' src={PlusBtn} alt="" />
                                    </button>
                                </div>
                            </div>
                            <img src={DelBtn} alt="" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}
