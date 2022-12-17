import React, { Component } from 'react'
import SpeicalCard from '../../Components/SpeicalCard/SpeicalCard'
import './style.css'
export default class SpecialView extends Component {
    render() {
        return (
            <div className='SpecialView' id='Special'>
                <div className='SpecialViewHeader'>
                    <p>Special</p>
                    <p>What makes us special</p>
                </div>
                <div className='SpecialViewBody'>
                    <SpeicalCard header={"Fresh food"} Text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "} />
                    <SpeicalCard Icon={1} header={"skilled Chef"} Text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "} />
                    <SpeicalCard Icon={2} header={"Exotic dishes"} Text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "} />

                </div>
            </div>
        )
    }
}
