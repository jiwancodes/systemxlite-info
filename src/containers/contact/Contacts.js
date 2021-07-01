import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Contacts.css'

function Contacts() {
    return (
        <div className="contact-wrapper"  id="contacts">
            <div className='contacts'>        
            <div className="thulo-word"> Contact</div>
            <div className="sano-word">Sarathi Marg, Gyaneshwor, Kathmandu, Nepal</div>
            <div className="sano-word">Phone: +977 4540783</div>
            <div className="sano-word">Email: systemxlite@smtmcapital.com.np</div>  
            </div>  
            <div className="border"></div>
            <div className='footer'>
                <div className="copyright">© 2021 All rights reserved</div>
                <div ></div>
                <div className="icons-wrapper">
                <div className="icons" outlined='circular'><InstagramIcon/></div>
                <div className="icons"><a href="https://www.facebook.com/systemxlite/" alt="systemxlite facebook page"><FacebookIcon/></a></div>
                <div className="icons"><TwitterIcon/></div>
                <div className="icons"><YouTubeIcon/></div>

                </div>
                </div>          
        </div>
    )
}

export default Contacts
