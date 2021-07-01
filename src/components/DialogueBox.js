import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogueBox(props) {
    const {open,handleClose,text,title }= props;
 

  return (
    <div>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <div style={{font:"#aa5555"}}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{text}
          {/* It is here to notify you that Systemxlite will not be availabe for this friday and saturday due to ongoing updates. This new upgrade will contain additional some features which we expect to enhance your experience with our application. Sorry for the Inconvinience. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} variant="outlined" color="primary" >
            Close
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
