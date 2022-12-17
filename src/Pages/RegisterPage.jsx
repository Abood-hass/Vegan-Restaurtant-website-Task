import React, { Component } from 'react'
import CopyRightView from '../Components/CopyRightView/CopyRightView'
import CustomHeader from '../Components/CustomHeader/CustomHeader'
import FooterView from '../Sections/FooterViwe/FooterView'
import RegisterFormView from '../Sections/RegisterFormView/RegisterFormView'
import RegisterView from '../Sections/RegisterView/RegisterView'
import './style.css'
export default class RegisterPage extends Component {
    render() {
        return (
            <div className='RegisterPage'>
                <div className='DivBackground'></div>
                <div className='Container' >
                    <CustomHeader />
                    <RegisterFormView />
                    <FooterView />
                    <RegisterView />
                    <CopyRightView />
                </div>
            </div >
        )
    }
}
