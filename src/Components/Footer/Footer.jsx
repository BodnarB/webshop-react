import React from 'react'
import './Footer.css'
import facebookLogo from '../../Assets/facebook.svg'
import instaLogo from '../../Assets/insta.svg'
import ytLogo from '../../Assets/yt.svg'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>Cake shop &copy; {year} </p>
            <div className='social-container'>
                <img className='social-logo' src={facebookLogo} alt="" />
                <img className='social-logo' src={instaLogo} alt="" />
                <img className='social-logo' src={ytLogo} alt="" />
            </div>
        </footer>
    )
}
