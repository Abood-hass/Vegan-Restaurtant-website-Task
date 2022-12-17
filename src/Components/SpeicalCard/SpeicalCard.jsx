import React from 'react'
import './style.css'
import resturantImage from '../../assest/Specials/resturnat.png'
import drinkImage from '../../assest/Specials/drink.png'
import chefImage from '../../assest/Specials/chef.png'

export default function SpeicalCard({ Icon = 0, header, Text }) {
    const images = [drinkImage, chefImage, resturantImage,]
    return (
        <div className='SpeicalCard'>
            <img src={images[Icon]} alt="" />
            <span>{header}</span>
            <span>{Text}</span>
        </div>
    )
}
