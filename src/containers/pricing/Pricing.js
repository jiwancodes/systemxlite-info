import React from 'react'
import './Pricing.css'

function Pricing(props) {
    return (
        <div className="pricing-container" id="pricing" refs={props.pricing} >
            <div className="subscription-plan">Subscription plans</div>
            <div className="plans-container">
                <div className="plan-wrapper colored">
                <div className="thulo-words">LIFE TIME access</div>
                <div className="paragraph">One time payment of</div>
                <div className="thulo-words">Rs. 5,000</div>
                </div>
                <div className="plan-wrapper colorless">
                <div className="thulo-words">1 Year access</div>
                <div className="spacer"></div>
                <div className="thulo-words">Rs. 2,500</div>
                </div>
            </div>            
        </div>
    )
}

export default Pricing
