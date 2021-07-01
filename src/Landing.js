import React, { useState, useEffect, Fragment } from 'react'
// import { css } from "@emotion/react";
// import SquareLoader from "react-spinners/SquareLoader";
import DialogueBox from './components/DialogueBox'
import AppBar from './components/appbar/AppBar';
import Contacts from './containers/contact/Contacts';
import Questions from './containers/FAQ/Questions';
import Home from './containers/home/Home';
import Pricing from './containers/pricing/Pricing';

function Landing() {
    const env_var = (typeof window._env_ !== "undefined")?window._env_:process.env;    
    // const [loading, setloading] = useState(false);
    const [open, setOpen] = useState(env_var.REACT_APP_SHOW_ALERT);
    const text = env_var.REACT_APP_ALERT_TEXT;
    // const text = "It is here to notify you that Systemxlite will not be availabe for this friday and saturday due to ongoing updates. This new upgrade will contain some additional features which we expect to enhance your experience with our application and sorry for the Inconvinience."
    const title = "Update Alert";
    // useEffect(() => {
    //     setOpen(true);
        // setloading(true);
        // setTimeout(() => {
            // setOpen(false);
            // setloading(false)    
        // }, 2000);
    // }, []);

    //   const override = css`
    //   align: center;
    //   display: block;
    //   margin: 15% auto;
    //   border-color: red;
    // `;
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="Landing">
            {/* { loading ? 
                <SquareLoader color='#4A90E2' loading={loading} css={override} size={150} />
            : */}
            <Fragment>
                <AppBar />
                <Home />
                <Pricing />
                <Questions />
                <Contacts />
                <DialogueBox handleClose={handleClose} open={open} title={title} text={text} />
            </Fragment>
            {/* } */}
        </div>
    )
}

export default Landing
