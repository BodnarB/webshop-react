import React from 'react'
import './Trendings.css'
import ProductCard from '../ProductCard/ProductCard'
import Arrow from '../../Assets/angles-right-solid.svg'
import { Link } from 'react-router-dom'
import ProductsList from '..//..//Products.json'
import { v4 as uuidv4 } from 'uuid';

export default function Trendings({ addToCart, prodTitle }) {
    return (
        <div className='trendings-container'>
            <h3 className='trendings-h3'>Best seller products</h3>
            <div className='trending-img-container'>
                {ProductsList.slice(2, 6).map(({ imgSrc, prodTitle, prodPrice }) => (
                    <ProductCard
                        key={uuidv4()}
                        imgSrc={process.env.PUBLIC_URL + imgSrc}
                        prodTitle={prodTitle}
                        prodPrice={prodPrice}
                        addToCart={addToCart}
                    />
                ))}
            </div>
            <Link to='/products'><button className='trending-btn'>All products <img className='arrow-icon' src={Arrow} alt="" /></button></Link>
        </div>
    )
}
