import React, { useState } from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import './AppBar.css'
import Button from '../buttons/Button'
import logo from '../../assets/systemxlogo.png'
import Hamburger from '../hamburgerButton/Hamburger'
import MaterialSideDrawer from '../sideDrawer/SideDrawer'

function AppBar(props) {
    const [state, setState] = useState({ left: false });
    const gotoHome = () => {
        console.log("clicked");
        const section = document.querySelector('#home');
        scrollWithOffset(section);
    }
    const gotoPricing = () => {
        const section = document.querySelector('#pricing');
        scrollWithOffset(section);
    }
    const gotoFaq = () => {
        const section = document.querySelector('#faq');
        scrollWithOffset(section);
    }
    const gotoContacts = () => {
        const section = document.querySelector('#contacts');
        scrollWithOffset(section);
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const toggleDrawer = (anchor, open) => (event,) => {
        console.log("clicked");
        if (
          event.type === 'keydown' &&
          ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) { return; }
        setState({ ...state, [anchor]: open });
      };


    return (
        <div className="appbar">
             <MaterialSideDrawer state={state} toggleDrawer={toggleDrawer} />
            <div className="logo-wrapper">
                <img src={logo} alt="systemxlite logo"></img>
            </div>
            <div className="spacer">

            </div>
            <div className="nav-item-wrapper">
            <Button name="Home" clicked={gotoHome} cls='small white'/>
            <Button name="Pricing" clicked={gotoPricing} cls='small white'/>
            <Button name="Contact" clicked={gotoContacts} cls='small white'/>
            <Button name="FAQ" clicked={gotoFaq} cls='small white'/>   
            </div>
            <div className="button-wrapper">
                <Button name="Login" clicked={props.executeScroll} cls="small-light blue" />
                <Button name="Free Trial" cls="small-dark" />
            </div>
            <div className="hamburger-container" >
                <div className="hamburger-icon"  onClick={toggleDrawer("left", true)}>
                <Hamburger onClick={toggleDrawer("left", true)}/>
                </div>

            </div>

        </div>
    )
}
export default AppBar
