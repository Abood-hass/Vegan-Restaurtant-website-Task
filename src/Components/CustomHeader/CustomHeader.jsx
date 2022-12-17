import React from 'react'
import './style.css'

export default function CustomHeader() {
    return (
        <div style={{ paddingTop: '120px' }}>
            <header className='header'>
                <div>
                    icon
                </div>
                <div className='navigation'>
                    <a>Home</a>
                    <a>About us</a>
                    <a>Special</a>
                    <a>Menu</a>
                    <a>Blogs</a>
                </div>
                <div className='bookNowBtn'>
                    <hr />
                    <div>Book Now</div>
                </div>
            </header>
        </div>

    )
}
