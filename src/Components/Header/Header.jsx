import React, { useState } from 'react'
import './Header.css'
import Logo from '../../Assets/logo.svg'
import Cart from '../../Assets/bagfill.svg'


export default function Header({ cartNum, openCart }) {


    const [showClass, setShowClass] = useState('')
    function menuClick() {
        showClass === '' ? setShowClass('show') : setShowClass('')
    }

    return (
        <header>
            <div className='header-cart-container' onClick={openCart}>
                <img className='header-cart-img' src={Cart} alt="" />
                <p className='header-cart-text'>{cartNum}</p>
            </div>
            <a className='logo-container' href="#">
                <p className='logo-text'>Cake shop</p>
                <img className='logo-img' src={Logo} alt="" />
            </a>
            <nav>
                <ul className={`nav-ul ${showClass}`}>
                    <li><a className='nav-link' href="">Home</a></li>
                    <li><a className='nav-link' href="">Products</a></li>
                    <li><a className='nav-link' href="">Contact</a></li>
                </ul>
                <div onClick={menuClick} className='hamburger-button'>
                    <span className='hamburger-lines'></span>
                </div>
            </nav>

        </header>
    )
}
