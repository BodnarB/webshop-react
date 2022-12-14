import React from 'react'
import './DeletePopup.css'

export default function DeletePopup() {
    return (
        <div className='delete-popup'>
            <p>Do you want to remove this from your cart?</p>
            <button>No</button><button>Yes</button>
        </div>
    )
}
