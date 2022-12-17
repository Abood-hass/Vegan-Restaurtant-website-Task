import React, { Component } from 'react'
import LoverWordCard from '../../Components/LoverWords/LoverWordCard'
import './style.css'

export default class ReviewsView extends Component {


    render() {
        return (

            <div className='ReviewsView'>
                <div className='ReviewsViewHeader'>
                    <p>Reviews</p>
                    <p>words from our food lovers</p>
                </div>
                <div className='ReviewsViewBody'>
                    {[...Array(3)].map(item => <LoverWordCard />)}
                </div>
            </div>
        )
    }
}
