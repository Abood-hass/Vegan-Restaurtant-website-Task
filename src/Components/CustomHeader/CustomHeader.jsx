import React from 'react'
import './style.css'
import icon from '../../assest/icons8-dining-room-50.png'

export default function CustomHeader() {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ paddingTop: '120px' }}>
            <header className='header'>
                <div className='RestIcon'>
                    <div className='RestIconPartOne'></div>
                    <img src={icon} alt="" />
                    <div className='RestIconPartTwo'></div>
                </div>
                <div className='navigation'>
                    <a >Home</a>
                    <a onClick={_ => handleClickScroll('About')} >About us</a>
                    <a onClick={_ => handleClickScroll('Special')} >Special</a>
                    <a onClick={_ => handleClickScroll('Menu')} >Menu</a>
                    <a onClick={_ => handleClickScroll('Blog')} >Blogs</a>
                </div>
                <div className='bookNowBtn'>
                    <hr />
                    <div>Book Now</div>
                </div>
            </header>
        </div>

    )
}
