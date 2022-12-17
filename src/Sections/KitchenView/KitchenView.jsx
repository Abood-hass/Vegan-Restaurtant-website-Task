import React, { Component } from 'react'
import MenuCard from '../../Components/MenuCard/MenuCard'
import './style.css'

export default class KitchenView extends Component {
    render() {
        return (
            <div className='KitchenView'>
                <div className='KitchenViewHeader'>
                    <p>Straight From Kitchen</p>
                    <p>Our Menu</p>
                </div>
                <div className='KitchenViewBody'>
                    {[...new Array(12)].map(_ => <MenuCard />)}
                </div>
            </div>
        )
    }
}
