import React from 'react'
import Button from '../../components/buttons/Button'
import analysisimage from '../../assets/analysis_img.png'
import mackbook from '../../assets/mackbook-pro.png'
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import './Home.css'

function Home() {
    return (
        <div className="home-container" id='home'>
            <div className="introWrapper">
                    Professional tools for the Everyday Investor
            </div>
            <div><Button cls="large-dark" name="Free Trial" clicked={null} /></div>
            <div className="image-wrapper"><img src={analysisimage} alt="technical chart"></img></div>
            <div className="blue-experience">
                <div className="exp-header">Experience the platform that started it all in Nepal</div>
                <div className="exp-body">Serving our customers since 2016</div>
            </div>
            <div className="tearsheet-intro-wrapper">
                <div className="stock-intro">
                    <div className="intro1">Powerful dashboards for stock   monitoring</div>
                    <div className="intro2">Simple and intuitive interfaces that allow you to access relevant and accurate information to aid you in your investment journey.</div>
                </div>
                <div className="mackbook-image-wrapper"><img src={mackbook} alt="mackbook with tearsheet in screen"></img></div>
                <div className="grey-div"> </div>
            </div>
            <div className="advantages">
                <div><h1>The advantages of our product</h1></div>
                <div className="card-container">

                    <div className="card-wrapper">
                        <div className="element-container">
                            <div className="cardSection1"><img src={icon1} alt="icon"></img></div>
                            <div className="cardSection2">Fast</div>
                            <div className="cardSection3">The platform delivers fast access to information and analytics. Feel the difference.  </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="element-container">
                            <div className="cardSection1"><img src={icon2} alt="icon"></img></div>
                            <div className="cardSection2">Standardized</div>
                            <div className="cardSection3">Consitent calculation methodologies provide the necessary accuracy to compare securities in and across industries.   </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="element-container">
                            <div className="cardSection1"><img src={icon3} alt="icon"></img></div>
                            <div className="cardSection2">All in one</div>
                            <div className="cardSection3">Track your holdings, stay informed, look up fundamentals, analyze stocks, generate insights and track broker movements. A simple to use all-in-one platform.  </div>
                        </div>
                    </div>

                </div>
                <div className="start-using-button-wrapper"><Button cls="large-dark" name="Start using" clicked={null} /></div>
            </div>
        </div>
    )
}

export default Home
