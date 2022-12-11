import React from 'react'
import './ProductCard.css'

export default function ProductCard({ imgSrc, prodTitle, prodPrice }) {
    return (
        <div className='prod-card'>
            <img className='trending-img' src={imgSrc} alt="" />
            <div className='prod-info-box'>
                <p className='prod-title'>{prodTitle}</p>
                <p className='prod-price'>{prodPrice} $</p>
            </div>
        </div>
    )
}
