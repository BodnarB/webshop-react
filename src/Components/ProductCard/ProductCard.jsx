import React from 'react'
import './ProductCard.css'
import cartImg from '../../Assets/bagfill.svg'

export default function ProductCard({ imgSrc, prodTitle, prodPrice, addToCart }) {
    return (
        <div className='prod-card'>
            <img className='trending-img' src={imgSrc} alt="" />
            <div className='prod-info-box'>
                <p className='prod-title'>{prodTitle}</p>
                <p className='prod-price'>{prodPrice} $</p>
                <button onClick={() => { addToCart(prodTitle, prodPrice) }} className='buy-btn'><img src={cartImg} alt="" /></button>
            </div>
        </div>
    )
}
