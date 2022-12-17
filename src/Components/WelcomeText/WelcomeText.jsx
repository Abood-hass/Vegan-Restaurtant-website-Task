import React from 'react'
import './style.css'

export default function WelcomeText({ mainText, secondText, Button }) {
    return (
        <div className='mainTextContainer'>
            <span>{mainText}</span>
            <span>{secondText}</span>
            {Button && <div>{Button}</div>}
        </div>
    )
}
