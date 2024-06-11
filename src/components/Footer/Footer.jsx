import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} className='logo' alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} className='logo' alt="" />
                        <img src={assets.twitter_icon} className='logo' alt="" />
                        <img src={assets.linkedin_icon} className='logo' alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get in touch</h2>
                    <p>+91 9611830909</p>
                    <p>contact@tomato.com</p>
                </div>
            </div>
            <hr/>
            <div><p>copyright 2024 @ Tomato.com-All Right Reserved</p></div>
        </div>
        
    )
}

export default Footer
