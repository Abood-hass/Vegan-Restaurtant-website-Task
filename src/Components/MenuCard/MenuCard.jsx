import React from 'react'
import './style.css'

export default function MenuCard({ alt = "Meal Image", mealPrice = 15, mealName = "Long Meal Name", descText = "this is very long text for one meal", src = "https://img.icons8.com/clouds/512/picture.png" }) {
    return (
        <div className='MenuCard'>
            <img src={src} alt={alt} />
            <span className='MenuCardtext'>
                <span>{mealName}</span>
                <span>{descText}</span>
            </span>
            <hr className='MenuCardLine' />
            <span className='MenuCardPrice'>Rs {mealPrice}</span>
        </div>
    )
}
