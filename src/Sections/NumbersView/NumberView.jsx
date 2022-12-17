import React, { Component } from 'react'
import './style.css'


import dishImage from '../../assest/Numbers/dish.png'
import chefImage from '../../assest/Numbers/chef.png'
import guestsImage from '../../assest/Numbers/guests.png'


export default class NumberView extends Component {

    content = [{
        "image": dishImage,
        "number": "250+",
        "label": "Delicacy"
    }, {
        "image": chefImage,
        "number": "10+",
        "label": "Renowed Chefs"
    }, {
        "image": guestsImage,
        "number": "30+",
        "label": "Members"
    }]


    render() {
        return (
            <div className='NumberView'>
                {this.content.map(item =>
                    <div className='NumberViewText'>
                        <img alt='' src={item.image} />
                        <div>
                            <p>{item.number}</p>
                            <p>{item.label}</p>
                        </div>
                    </div>)}
            </div>
        )
    }
}
