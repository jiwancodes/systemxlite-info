import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DialogueBox from './components/DialogueBox'
import AppBar from './components/appbar/AppBar';
import Contacts from './containers/contact/Contacts';
import Questions from './containers/FAQ/Questions';
import Home from './containers/home/Home';
import Pricing from './containers/pricing/Pricing';
import Advantages from './containers/advantages/Advantages';

function Landing() {
    // const env_var = (typeof window._env_ !== "undefined")?window._env_:process.env;  
    // const text = env_var.REACT_APP_ALERT_TEXT;
    // const text = "It is here to notify you that Systemxlite will not be availabe for this friday and saturday due to ongoing updates. This new upgrade will contain some additional features which we expect to enhance your experience with our application and sorry for the Inconvinience."
    // const title = "Update Alert";
    // const title =env_var.REACT_APP_ALERT_HEADER;
    const [open, setOpen] = useState(false);
    const [text, settext] = useState("");
    const [title, setheader] = useState("");
    useEffect(() => {
        checkForAlert();
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
    const checkForAlert = () => {

        // axios.get('http://localhost:4015/npstocks/popup-alert/systemxlite-page')
        axios.get('https://api.npstocks.com/npstocks/popup-alert/systemxlite-page')
            .then((response) => {
                console.log(response.data);
                if (response.data !== null) {
                    const { header, description } = response.data.response;
                    settext(description);
                    setheader(header);
                    setOpen(true);
                }
                else {
                    setOpen(false);
                }
            })
    };
    return (
        <div className="Landing">
            <AppBar />
            <Home />
            <Advantages />
            <Pricing />
            <Questions />
            <Contacts />
            <DialogueBox handleClose={handleClose} open={open} title={title} text={text} />

        </div>
    )
}

export default Landing
