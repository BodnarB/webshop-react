import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './Products.css'
import { useState, useEffect } from 'react'
import ProductsList from '..//../Products.json'
import { v4 as uuidv4 } from 'uuid';
import arrowIcon from '../../Assets/arrow-down.svg'

export default function Products({ addToCart }) {
    const [selected, setSelected] = useState('Price: Low to high')
    const [showSelect, setShowSelect] = useState('hide')
    const [arrow, setArrow] = useState('')
    let ProductsAscending = [...ProductsList].sort((a, b) => a.prodPrice - b.prodPrice)
    let ProductsDescending = [...ProductsList].sort((a, b) => b.prodPrice - a.prodPrice)
    let ProductsAZ = [...ProductsList].sort((a, b) => {
        if (a.prodTitle < b.prodTitle) {
            return -1
        }
        if (a.prodTitle > b.prodTitle) {
            return 1
        }
        return 0
    })
    const [sortingRender, setSortingRender] = useState(ProductsAscending)

    function selectMenu() {
        showSelect === '' ? setShowSelect('hide') : setShowSelect('')
        showSelect === 'hide' ? setArrow('turn-arrow') : setArrow('')
    }

    function setSelect(e) {
        setSelected(e.target.innerText)
        setShowSelect('hide')
    }

    useEffect(() => {
        let sortingRendering = ''
        if (selected === 'Price: Low to high') {
            sortingRendering = ProductsAscending
        }
        else if (selected === 'Price: High to low') {
            sortingRendering = ProductsDescending
        }
        else if (selected === 'A-Z') {
            sortingRendering = ProductsAZ
        }
        setSortingRender(sortingRendering)
    }, [selected])

    return (
        <div className='products-page'>
            <div className='products-cover-container'>
                <img className='products-page-cover' src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <h2 className='prod-h2'>Products</h2>
            </div>
            <div className='custom-select' >
                <button className='select-btn' onClick={selectMenu}>
                    Sort by:<p className='sortby-text'>{selected}</p>
                    <img className={`sorting-arrow ${arrow}`} src={arrowIcon} alt="" />
                </button>
                <ul className={`products-sorting ${showSelect}`}>
                    <li onClick={setSelect} className='sorting-mode'>Price: Low to high</li>
                    <li onClick={setSelect} className='sorting-mode'>Price: High to low</li>
                    <li onClick={setSelect} className='sorting-mode'>A-Z</li>
                </ul>
            </div>
            <div className='products-container'>
                {sortingRender.map(({ imgSrc, prodTitle, prodPrice }) => (
                    <ProductCard
                        key={uuidv4()}
                        imgSrc={imgSrc}
                        prodTitle={prodTitle}
                        prodPrice={prodPrice}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    )
}
