import React, { useState} from 'react'
import DialogueBox from './components/DialogueBox'
import AppBar from './components/appbar/AppBar';
import Contacts from './containers/contact/Contacts';
import Questions from './containers/FAQ/Questions';
import Home from './containers/home/Home';
import Pricing from './containers/pricing/Pricing';
import Advantages from './containers/advantages/Advantages';

function Landing() {
    const env_var = (typeof window._env_ !== "undefined")?window._env_:process.env; 
    const [open, setOpen] = useState(env_var.REACT_APP_SHOW_ALERT);
    const text = env_var.REACT_APP_ALERT_TEXT;
    // const text = "It is here to notify you that Systemxlite will not be availabe for this friday and saturday due to ongoing updates. This new upgrade will contain some additional features which we expect to enhance your experience with our application and sorry for the Inconvinience."
    // const title = "Update Alert";
    const title =env_var.REACT_APP_ALERT_HEADER;
    // useEffect(() => {
    //     setOpen(true);
        // setTimeout(() => {
            // setOpen(false);   
        // }, 2000);
    // }, []);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="Landing">
                <AppBar />
                <Home />
                <Advantages/>
                <Pricing />
                <Questions />
                <Contacts />
                <DialogueBox handleClose={handleClose} open={open} title={title} text={text} />
          
        </div>
    )
}

export default Landing
