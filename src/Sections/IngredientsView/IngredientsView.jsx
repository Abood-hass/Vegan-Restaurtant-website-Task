import React, { Component } from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import './style.css'

export default class IngredientsView extends Component {
    render() {
        return (
            <div className='IngredientsView'>
                <div className='IngredientsViewHeader'>
                    <p>Cooking ingredients</p>
                    <p>What goes in</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>
                    <CustomButton label={"Read More"} />
                </div>
                <div className='IngredientsViewImage'>
                    <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

            </div>
        )
    }
}
