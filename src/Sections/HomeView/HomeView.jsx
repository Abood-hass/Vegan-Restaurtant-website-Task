import React, { Component } from 'react'
import './style.css'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import WelcomeText from '../../Components/WelcomeText/WelcomeText'
import CustomButton from '../../Components/CustomButton/CustomButton'

export default class HomeView extends Component {
    render() {
        return (
            <div className='mainHomeViewDiv'>
                <CustomHeader />
                <WelcomeText Button={<CustomButton label={"Read More"} />} mainText={"Welcome To Golden View Dine"} secondText={"Explore the authentic vegan dishes with your friends and family"} />

            </div>
        )
    }
}
