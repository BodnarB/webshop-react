import React, { useState } from 'react'
import './Header.css'
import Logo from '../../Assets/logo.svg'


export default function Header() {


    const [showClass, setShowClass] = useState('')
    function menuClick() {
        showClass === '' ? setShowClass('show') : setShowClass('')
    }

    return (
        <header>
            <a className='logo-container' href="#">
                <img className='logo-img' src={Logo} alt="" />
                <p className='logo-text'>Cake shop</p>
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
