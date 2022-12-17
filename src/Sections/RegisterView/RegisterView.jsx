import React, { Component } from 'react'
import emailIcon from '../../assest/icons8-envelope-24.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
import './style.css'

export default class RegisterView extends Component {
    render() {
        return (
            <div className='RegisterView'>
                <div className='emailSub'><img src={emailIcon} alt="" /><span>Subscribe to our Newsletter</span></div>
                <div className='emailInput'><input type="email" placeholder='Your Email id' /><CustomButton style={{ 'border-color': '#ffffcc' }} label={"Subscribe"} /></div>
            </div>
        )
    }
}
