import React, { Component } from 'react'

import twitterIcon from '../../assest/SocialMedia/icons8-twitter-30.png'
import instagramIcon from '../../assest/SocialMedia/icons8-instagram-24.png'
import youtubeIcon from '../../assest/SocialMedia/icons8-youtube-30.png'

import emailIcon from '../../assest/ContactIcons/icons8-secured-letter-30.png'
import phoneIcon from '../../assest/ContactIcons/icons8-phone-50.png'
import locationIcon from '../../assest/ContactIcons/icons8-location-24.png'

import './style.css'

export default class FooterView extends Component {
    render() {
        return (
            <div className='FooterView'>

                <div className='ResturantIcon'>
                    <p>Golden View Dine</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
                    <div className='socialMedia'><img src={twitterIcon} alt="" /><img src={instagramIcon} alt="" /><img src={youtubeIcon} alt="" /></div>
                </div>

                <div className='OtherLinks'>
                    <p>Other Links</p>
                    <li><span>Privacy Policy</span></li>
                    <li><span>Terms & conditions</span></li>
                    <li><span>Blogs</span></li>
                    <li><span>Our team</span></li>
                    <li><span>Our kitchen</span></li>

                </div>

                <div className='ContactUs'>
                    <p>Contact Us</p>
                    <div><img src={emailIcon} alt="" /><span>Gogreendineservice@gmail.com</span></div>
                    <div><img src={locationIcon} alt="" /><span>AZ complex bylane3 Mandari Rd Mumbai 1100867</span></div>
                    <div><img src={phoneIcon} alt="" /><span>+1800 287 256</span></div>
                </div>
            </div>
        )
    }
}
