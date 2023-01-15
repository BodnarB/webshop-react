import React from 'react'
import './CartItem.css'
import PlusBtn from '../../Assets/plus-lg.svg'
import MinusBtn from '../../Assets/dash-lg.svg'
import DelBtn from '../../Assets/trash3.svg'

export default function CartItem({ cartItems, removeProd, addProd, delProd }) {
    return (
        <>
            {cartItems.map((element, index) => {
                return (
                    <div key={index} className='cart-item' >
                        <img className='prod-img' src={element.imgSrc} alt="" />
                        <div className='cart-right-container'>
                            <div className='cart-prod-text-container'>
                                <p className='cart-item-name'>{element.prodTitle}</p>
                            </div>
                            <div className='prod-img-qty-container'>
                                <p className='prod-price'>{element.prodPrice} $</p>
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
                                    <img className='prod-del-btn' onClick={() => { delProd(element.prodTitle) }} src={DelBtn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
