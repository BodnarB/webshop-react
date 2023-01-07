import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <h2 className='contact-h2'>Contact</h2>
            <form className='form-container' action="#" method='get'>
                <input type="text" className="form-input" name="name" placeholder="Name" required />
                <input type="email" className="form-input" name="email" placeholder="E-mail" required />
                <textarea name="message" className="form-input" placeholder="Message" required></textarea>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </>
    )
}
