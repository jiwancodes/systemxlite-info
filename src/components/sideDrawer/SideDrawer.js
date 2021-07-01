import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '../buttons/Button';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listItem: {
        textAlign: 'center',
        alignContent:'center',
        height:'auto',
    },
    listButton:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
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
        const yOffset = -120;
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
                            {/* <Divider />
                            <List>
                                    <ListItem  button key="login" onClick={onLoginButtonClickHandler}>
                                        <ListItemIcon><AccountCircleIcon /> </ListItemIcon>
                                        <ListItemText primary="Log In" />
                                    </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem  button key="trial" onClick={onFreeTrialButtonClickHandler}>
                                    <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon>
                                    <ListItemText primary="Free Trial" />
                                </ListItem>    
                            </List>
                            <Divider /> */}
                            <>
                            <List>
                                <ListItem className={classes.listButton} button key="login" onClick={onLoginButtonClickHandler}>
                                <Button name="Login" clicked={onLoginButtonClickHandler} cls="small-light blue" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem className={classes.listButton} button key="trial" onClick={onFreeTrialButtonClickHandler}>
                                <Button name="Free Trial" clicked={onFreeTrialButtonClickHandler} cls="small-dark" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem className={classes.listItem} button key="home" onClick={gotoHome}>
                                    {/* <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon> */}
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem className={classes.listItem} button key="pricing" onClick={gotoPricing}>
                                    {/* <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon> */}
                                    <ListItemText primary="Pricing" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem className={classes.listItem} button key="faq" onClick={gotoFaq}>
                                    {/* <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon> */}
                                    <ListItemText primary="FAQ" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem className={classes.listItem} button key="Contacts" onClick={gotoContacts}>
                                    {/* <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon> */}
                                    <ListItemText primary="Contacts" />
                                </ListItem>
                            </List>
                            <Divider />
                            </><ListItem>
                            </ListItem>
                            <div className="button-wrapper">
                                <Button name="Login" clicked={onLoginButtonClickHandler} cls="small-light blue" />
                                <Button name="Free Trial" clicked={onFreeTrialButtonClickHandler} cls="small-dark" />
                            </div>
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
