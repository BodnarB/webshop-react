import React from 'react'
import './Trendings.css'
import ProductCard from '../ProductCard/ProductCard'
import Arrow from '../../Assets/angles-right-solid.svg'

export default function Trendings({addToCart, prodTitle}) {
    return (
        <div className='trendings-container'>
            <h3>Best seller products</h3>
            <div className='trending-img-container'>
                <ProductCard
                    imgSrc={"\\Assets\\Trendings\\pexels-abhinav-goswami-291528.jpg"}
                    prodTitle={'Extra chocolate cake'}
                    prodPrice={7}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Trendings\\pexels-matheus-guimarães-1291712.jpg"}
                    prodTitle={'Forest fruit cake'}
                    prodPrice={6.5}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Trendings\\pexels-quang-nguyen-vinh-2144200.jpg"}
                    prodTitle={'Strawberry cream cake'}
                    prodPrice={7.8}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Trendings\\pexels-suzy-hazelwood-1126359.jpg"}
                    prodTitle={'Vanilla jelly cake'}
                    prodPrice={6}
                    addToCart={addToCart}
                />
            </div>
            <button className='trending-btn'>All products <img className='arrow-icon' src={Arrow} alt="" /></button>
        </div>
    )
}
