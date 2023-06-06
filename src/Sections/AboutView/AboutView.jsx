import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import './style.css'

export default function AboutView() {
    return (
        <div className='AboutView' id='About'>
            <div className='AboutViewHeader'>
                <p>About us</p>
                <p>Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                <CustomButton label={"Read More"} />
            </div>
            <div className='AboutViewImage'>
                <img src=" https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

        </div>
    )
}
