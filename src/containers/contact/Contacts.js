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
                <a className="icons" href="https://www.instagram.com/smtmcapital/" target="_blank" rel="noopener noreferrer" alt="systemxlite instagram page"><InstagramIcon/></a>
                <a className="icons" href="https://www.facebook.com/systemxlite/" target="_blank" rel="noopener noreferrer" alt="systemxlite facebook page"><FacebookIcon/></a>
                <a className="icons" href="https://twitter.com/systemlite" target="_blank" rel="noopener noreferrer" alt="systemxlite twitter page"><TwitterIcon/></a>
                <a className="icons" href="https://www.youtube.com/channel/UCe01SMBUAZQ1xWiYPvRshGQ" target="_blank" rel="noopener noreferrer" alt="systemxlite youtube page"><YouTubeIcon/></a>
                  

                </div>
                </div>          
        </div>
    )
}

export default Contacts
