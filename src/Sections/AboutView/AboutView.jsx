import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import './style.css'

export default function AboutView() {
    return (
        <div className='AboutView'>
            <div className='AboutViewHeader'>
                <p>About us</p>
                <p>Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                <CustomButton label={"Read More"} />
            </div>
            <div className='AboutViewImage'>
                <img src="https://s3-alpha-sig.figma.com/img/8278/307b/4c8633355048a548608806c25c95bdc0?Expires=1672012800&Signature=BvWIXU2Eb2YW043Xns~1TJCoCZH6TVrxGpSvBrLRr~1K8sV944GbqZNeM6TAgrEqDG-R7nuFDSG97JQCl3rxcTJWtC5J2EpuiS9H5uiewq6LaEffYbXyueTUDAtoXHoAQiqZ0aqf0x1BZa~ryfHccB30FxIWle-iPcshpSm2MPf-Nc08y5ues4v0znxeM6bD9dK30cVvQ8PGkKT5SJRVFaXaHXRykAM6YgFqauS5qCMbRtLWjpkQBAg~vqMo6d2Zj43OvXE4Xk5fYvL~0ZJF9tZNilcBvR9larD45W0Ww~c360xVPgMkQ-yVtYI0G55ttTtVUoXsFD1cnD7G5vHM2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>

        </div>
    )
}
