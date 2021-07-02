import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '../../components/buttons/Button'

import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

import './Advantages.css'

function Advantages() {
    const onLoginButtonClickHandler=()=>{
        window.location.href="https://login.systemxlite.com/login/"
    }
    return (
        <div className="advantages">
        <div className="advantage-header">The advantages of our product</div>
        <div className="card-container">

            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon1} alt="icon"/></div>
                    <div className="cardSection2">Fast</div>
                    <div className="cardSection3">The platform delivers fast access to information and analytics. Feel the difference.  </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon2} alt="icon"/></div>
                    <div className="cardSection2">Standardized</div>
                    <div className="cardSection3">Consitent calculation methodologies provide the necessary accuracy to compare securities in and across industries.   </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon3} alt="icon"/></div>
                    <div className="cardSection2">All in one</div>
                    <div className="cardSection3">Track your holdings, stay informed, look up fundamentals, analyze stocks, generate insights and track broker movements. A simple to use all-in-one platform.  </div>
                </div>
            </div>

        </div>
        <div className="start-using-button-wrapper"><Button cls="large-dark" name="Start using" clicked={onLoginButtonClickHandler} /></div>
    </div>

    )
}

export default Advantages
