import React from 'react'
import Button from '../../components/buttons/Button'
import analysisimage from '../../assets/analysis_img.png'
import mackbook from '../../assets/mackbook-pro.png'
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import './Home.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home() {
    const onFreeTrialButtonClickHandler=()=>{
        window.location.href="https://login.systemxlite.com/register"
    }

    return (
        <div className="home-container" id='home'>
            <div className="introWrapper">
                    Professional tools for the Everyday Investor
            </div>
            <div><Button cls="large-dark" name="Free Trial" clicked={onFreeTrialButtonClickHandler} /></div>
            <div className="image-wrapper"><LazyLoadImage effect="blur" src={analysisimage} alt="technical chart"/></div>
            <div className="blue-experience">
                <div className="exp-header">Experience the platform that started it all in Nepal</div>
                <div className="exp-body">Serving our customers since 2016</div>
            </div>
            <div className="tearsheet-intro-wrapper">
                <div className="stock-intro">
                    <div className="intro1">Powerful dashboards for stock   monitoring</div>
                    <div className="intro2">Simple and intuitive interfaces that allow you to access relevant and accurate information to aid you in your investment journey.</div>
                </div>
                <div className="mackbook-image-wrapper"><LazyLoadImage effect="blur" src={mackbook} alt="mackbook with pro"/></div>
                <div className="grey-div"> </div>
            </div>
           </div>
    )
}

export default Home
