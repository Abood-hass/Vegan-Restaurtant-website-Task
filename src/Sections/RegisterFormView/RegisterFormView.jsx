import React, { Component } from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import './style.css'

export default class RegisterFormView extends Component {

    dateOptions = [2022, 2023, 2024, 2025]
    render() {
        return (
            <div className='RegisterFormView'>
                <div className='RegisterFormViewHeader'>
                    <p>Reserve a seat</p>
                    <p>Book a table on time</p>
                </div>
                <form className='RegisterForm' action="">
                    <div className='RegisterFormFirstGroup'>
                        <input type="text" placeholder='Your full Name' />
                        <input type="tel" placeholder='Your Phone Number' />
                    </div>
                    <div className='RegisterFormSecondGroup'>
                        <select placeholder='Select Date' >
                            <option value="" selected={false}>Select Date</option>
                            {this.dateOptions.map(date => <option value={date}>{date}</option>)}
                        </select>
                        <select placeholder='Time slot' >
                            <option value="" selected={false}>Time slot</option>
                            <option value="Day" >Day</option>
                            <option value="Night">Night</option>
                        </select>
                        <select placeholder='Occupancy' >
                            <option value="" selected={false}>Occupancy</option>
                            <option value="Occupancy 1" >Occupancy 1</option>
                            <option value="Occupancy 2">Occupancy 2</option>
                        </select>

                    </div>
                    <CustomButton label={"Book Now"} style={{ width: '200px', alignSelf: 'center', borderColor: '#ffce6d' }} />
                </form>
            </div>
        )
    }
}
