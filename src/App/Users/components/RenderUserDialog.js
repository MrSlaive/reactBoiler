import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RenderDeleteForm from './RenderDeleteForm';
import RenderViewEditForm from './RenderViewEditForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({dialogType, handleResetDialog}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    handleResetDialog();
  };
  React.useEffect(()=>{
      if(dialogType && !open){
        setOpen(true);
      } else if(open && !dialogType){
          setOpen(false)
      }
  },[dialogType]);
  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Dialog For {dialogType}</DialogTitle>
        <DialogContent>
            {dialogType === 'delete' ?
                <RenderDeleteForm/>
                :
                <RenderViewEditForm
                    formType={dialogType}
                />
            }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
