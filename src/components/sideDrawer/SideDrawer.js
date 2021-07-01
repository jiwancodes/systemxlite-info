import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';





const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});



export default function MaterialSideDrawer(props) {
    const classes = useStyles();
    const { toggleDrawer, state } = props
   
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
                            <List>
                                    <ListItem button key="login">
                                        <ListItemIcon><AccountCircleIcon /> </ListItemIcon>
                                        <ListItemText primary="Log In" />
                                    </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem onClick={null}>
                                    <ListItemIcon > <AddCircleOutlineIcon /> </ListItemIcon>
                                    <ListItemText primary="Free Trial" />
                                </ListItem>    
                            </List>
                        </div>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
