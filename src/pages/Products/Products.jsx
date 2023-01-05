import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './Products.css'

export default function Products({ addToCart }) {
    return (
        <div className='products-page'>
            <h2 className='prod-h2'>Products</h2>
            <select className='sorting-products' name="order" id="order">
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="a-z">A-Z</option>
            </select>
            <div className='products-container'>
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
                <ProductCard
                    imgSrc={"\\Assets\\Products\\pexels-valeria-boltneva-827516.jpg"}
                    prodTitle={'Raspberry cake'}
                    prodPrice={5.6}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Products\\pexels-valeria-boltneva-1639564.jpg"}
                    prodTitle={'Vanilla cake with berries'}
                    prodPrice={5.6}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Products\\pexels-erick-mufasa-1414234.jpg"}
                    prodTitle={'Pink and white cake'}
                    prodPrice={6}
                    addToCart={addToCart}
                />
                <ProductCard
                    imgSrc={"\\Assets\\Products\\pexels-pelageia-zelenina-10390467.jpg"}
                    prodTitle={'Cheesecake'}
                    prodPrice={8}
                    addToCart={addToCart}
                />
            </div>
        </div>
    )
}
