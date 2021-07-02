import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import Button from '../buttons/Button';
import './SideDrawer.css'


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listItem: {
        textAlign: 'left',
        alignContent:'center',
        height:'auto',
    },
    listButton:{
        padding:'-10px, auto 10px 10px',
        textAlign:'left',
        backgroundColor:'#8c34f3',
        color:'#ffffff',
        fontSize:'16px',
        fontWeight:'600',
    }
});



export default function MaterialSideDrawer(props) {
    const classes = useStyles();
    const { toggleDrawer, state } = props
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
        const yOffset = 0;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    const onLoginButtonClickHandler = () => {
        window.location.href = "https://login.systemxlite.com/login/"
    }
    const onFreeTrialButtonClickHandler = () => {
        window.location.href = "https://login.systemxlite.com/register"
    }


    return (
        <div>
            {(['left']).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <div
                            className={clsx(classes.list, { [classes.fullList]: anchor === 'top' || anchor === 'bottom', })}
                            role="presentation"
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                        >
                        <div className="list-wrapper">
                            <div className="list-element neelo-button" onClick={onLoginButtonClickHandler}>
                            <div className="drawer-button " >LOGIN</div>
                            </div>
                            <div className="list-element seto-button" onClick={gotoHome}>
                            <div className="drawer-button " >Home</div>
                            </div>
                            <div className="list-element seto-button" onClick={gotoPricing}>
                            <div className="drawer-button ">PRICING</div>
                            </div>
                            <div className="list-element seto-button" onClick={gotoFaq}>
                            <div className="drawer-button ">FAQ</div>
                            </div>
                            <div className="list-element seto-button" onClick={gotoContacts}>
                            <div className="drawer-button ">CONTACT</div>
                            </div>


                        </div>

                            {/* <List>
                                <ListItem className="listButton" button key="login" onClick={onLoginButtonClickHandler}>
                                   <div className="drawer-button neelo"> LOGIN</div>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem className={classes.listItem} button key="home" onClick={gotoHome}>
                                    <div className="drawer-button">HOME</div>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem className={classes.listItem} button key="pricing" onClick={gotoPricing}>
                                    <div className="drawer-button">PRICING</div>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem className={classes.listItem} button key="faq" onClick={gotoFaq}>
                                    <div className="drawer-button">FAQ</div>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem className={classes.listItem} button key="Contacts" onClick={gotoContacts}>
                                    <div className="drawer-button">CONTACT</div>
                                </ListItem>
                            </List> */}
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
