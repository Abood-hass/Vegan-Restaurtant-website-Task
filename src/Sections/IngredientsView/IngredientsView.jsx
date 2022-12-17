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
                    <img src="https://s3-alpha-sig.figma.com/img/41ec/0173/f7c0bf8d160ce52602293cc381d90d21?Expires=1672012800&Signature=U2eoqslU07LToB2xarWiXqlyL3aXvfGB4iVTbgThe67XrY4gNXBAzRUJCERMX09EDIKy0PU4CumJxwGmA2j7tZDAhYwcK1udQDQcWv2nKpI67ShwR7FAF5OocfEeM64fxM5Uf8cKW-jclLerlSUtX2BXiUlzZh4Z24iZPC9dNeFlwSxzJvGsBgpbLry16redu9ivhjOGRR-umTPKSauSFBg4wXSir6eSPiwo5DRShTz2KSoRvY-qQkpaGgEz4XsIHY9m8-SvPLNjMnYAFZSZTbWjEzjPExXQQWMagyWJcjrpoA1~kCOBKhXjltDldbLTEGkiff4WUT60rCNCAREjlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>

            </div>
        )
    }
}
