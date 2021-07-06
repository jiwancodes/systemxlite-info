import React from 'react'
import Button from '../../components/buttons/Button'
import analysisimage from '../../assets/analysis_img.png'
import mackbook from '../../assets/mackbook-pro.png'
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
            Professional investment and trading tools for you!            </div>
            <div><Button cls="large-dark" name="Get your free trial today!" clicked={onFreeTrialButtonClickHandler} /></div>
            <div className="image-wrapper"><LazyLoadImage effect="blur" src={analysisimage} alt="technical chart"/></div>
            <div className="blue-experience">
                <div className="exp-header">Use the pioneering platform that is powering the investment industry in Nepal.</div>
                <div className="exp-body">Delighting our customers since 2016.</div>
            </div>
            <div className="tearsheet-intro-wrapper">
                <div className="stock-intro">
                    <div className="intro1">Powerful, Comprehensive, and Intuitive screens </div>
                    <div className="intro2">Interfaces that provide accurate, relevant, and reliable information to assist you in your investment journey.</div>
                </div>
                <div className="mackbook-image-wrapper"><LazyLoadImage effect="blur" src={mackbook} alt="mackbook with pro"/></div>
                <div className="grey-div"> </div>
            </div>
           </div>
    )
}

export default Home
