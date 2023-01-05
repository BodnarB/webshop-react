import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './Products.css'
import { useState } from 'react'
import ProductsList from '..//../Products.json'

export default function Products({ addToCart }) {

    const [selected, setSelected] = useState('Price: Low to high')
    const [showSelect, setShowSelect] = useState('hide')

    console.log(ProductsList)
    console.log(ProductsList.sort((a, b) => a.prodPrice - b.prodPrice),'sorted')

    function selectMenu() {
        showSelect === '' ? setShowSelect('hide') : setShowSelect('')
    }

    function setSelect(e) {
        setSelected(e.target.innerText)
        setShowSelect('hide')
    }

    return (
        <div className='products-page'>
            <h2 className='prod-h2'>Products</h2>
            <div className='custom-select' >
                <button className='select-btn' onClick={selectMenu}>Sort by:<p className='sortby-text'>{selected}</p> </button>
                <ul className={`products-sorting ${showSelect}`}>
                    <li onClick={setSelect} className='sorting-mode'>Price: Low to high</li>
                    <li onClick={setSelect} className='sorting-mode'>Price: High to low</li>
                    <li onClick={setSelect} className='sorting-mode'>A-Z</li>
                </ul>
            </div>
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
