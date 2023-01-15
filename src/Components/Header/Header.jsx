import React, { useState } from 'react'
import './Header.css'
import Logo from '../../Assets/logo.svg'
import Cart from '../../Assets/bagfill.svg'
import { Link } from 'react-router-dom'

export default function Header({ cartNum, openCart }) {
    const [showClass, setShowClass] = useState('')
    function menuClick() {
        showClass === '' ? setShowClass('show') : setShowClass('')
    }

    function hideMenu() {
        setShowClass('')
    }

    return (
        <header>
            <Link to='/cart'>
                <div className='header-cart-container' onClick={hideMenu}>
                    <img className='header-cart-img' src={Cart} alt="" />
                    <p className='header-cart-text'>{cartNum}</p>
                </div>
            </Link>
            <Link className='logo-container' to="/">
                <p className='logo-text'>Cake shop</p>
                <img className='logo-img' src={Logo} alt="" />
            </Link>
            <nav>
                <ul className={`nav-ul ${showClass}`}>
                    <li onClick={hideMenu}><Link className='nav-link' to="/">Home</Link></li>
                    <li onClick={hideMenu}><Link className='nav-link' to="/products">Products</Link></li>
                    <li onClick={hideMenu}><Link className='nav-link' to="/contact">Contact</Link></li>
                </ul>
                <div onClick={menuClick} className='hamburger-button'>
                    <span className='hamburger-lines'></span>
                </div>
            </nav>
        </header>
    )
}
