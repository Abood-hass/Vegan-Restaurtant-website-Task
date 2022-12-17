import React from 'react'
import './style.css'
export default function BlogButtom({ label = "Read More" }) {
    return (
        <div>
            <button className='readMoreBtn'>{label}</button>
        </div>

    )
}
