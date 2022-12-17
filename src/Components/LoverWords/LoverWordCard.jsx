import React from 'react'
import './style.css'
import starIcon from '../../assest/icons8-christmas-star-52.png'
import userIcon from '../../assest/defualtUser.png'

export default function LoverWordCard({ avatar = userIcon, name = "User Name", rate = 5, commentBody = "Very Nice" }) {
    return (
        <div className='loverCard'>
            <div className='userInfo'>
                <img className='userAvatar' src={avatar} alt="" />
                <div >
                    <span className='userName'>{name}</span>
                    <div>{[...Array(rate % 6)].map(i => <img className='startIcon' src={starIcon} alt="" />)}</div>
                </div>
            </div>
            <div className='userComment'><q>{commentBody}</q></div>
        </div>
    )
}
