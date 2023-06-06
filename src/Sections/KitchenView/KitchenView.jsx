import React, { Component } from 'react'
import MenuCard from '../../Components/MenuCard/MenuCard'
import './style.css'

export default class KitchenView extends Component {
    meals = [
        {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        }, {
            mealName: "Phasellus convallis maximus",
            descText: "Lorem ipsum dolor sit amet",
            src: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            mealPrice: 15
        },
    ]

    render() {
        return (
            <div className='KitchenView' id='Menu'>
                <div className='KitchenViewHeader'>
                    <p>Straight From Kitchen</p>
                    <p>Our Menu</p>
                </div>
                <div className='KitchenViewBody'>
                    <div>
                        {this.meals.map(item => <MenuCard {...item} />)}
                    </div>
                    <div>
                        {this.meals.map(item => <MenuCard {...item} />)}
                    </div>
                </div>
            </div>
        )
    }
}
