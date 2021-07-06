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
        <div className="advantage-header">systemxlite advantages</div>
        <div className="card-container">

            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon1} alt="icon"/></div>
                    <div className="cardSection2">Fast</div>
                    <div className="cardSection3">Latest technologies give you fast access to information and analytics. </div>
                    <div className="cardSection3">Feel the difference! </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon2} alt="icon"/></div>
                    <div className="cardSection2">Standardized</div>
                    <div className="cardSection3">Consistent calculation methodologies throughout the platform to ensure comparability between companies and across sectors. </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="element-container">
                    <div className="cardSection1"><LazyLoadImage effect="blur" src={icon3} alt="icon"/></div>
                    <div className="cardSection2">Comprehensive</div>
                    <div className="cardSection3">Track your investments, stay informed of market news, and analyze companies and market movements.</div>
                </div>
            </div>

        </div>
        <div className="start-using-button-wrapper"><Button cls="large-dark" name="Start using systemxlite today!" clicked={onLoginButtonClickHandler} /></div>
    </div>

    )
}

export default Advantages
