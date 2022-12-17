import React, { Component } from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import yellowString from '../../assest/yellowString.png'
import './style.css'

export default class AdView extends Component {
    render() {
        return (
            <div className='AdView'>
                <div className='AdViewIcon'>
                    <img src={yellowString} alt="" />
                    <img src={yellowString} alt="" />
                </div>
                <div className='AdViewText'>
                    <p>Come join us for a lunch this weekend and enjoy</p>
                    <p>FLAT 10% OFF</p>
                    <CustomButton label={"Book Table"} style={{ width: '200px' }} />
                </div>
                <div className='AdViewIcon'>
                    <img src={yellowString} alt="" />
                    <img src={yellowString} alt="" />
                </div>
            </div>
        )
    }
}
