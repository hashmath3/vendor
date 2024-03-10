import React, { useState ,useRef} from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button, Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Occasions = () => {

    const [open, setOpen] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
    const descriptionElementRef = React.useRef(null);  
  
    const handleClose = () => {
      setOpen(false);
    };
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
  return (
    <>
    <Grid container spacing={2}>
  

  <Grid item xs={9}>
      <Stack   spacing={0} >
  
  <h2 style={{marginBottom:1}}>CUISINES UPDATE</h2 >
  <span>
    Add your Cusines below
  </span>
  
      </Stack>
    </Grid>
    <Grid item xs={3}>
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0} sx={{ marginTop: '20px'}}
  >
  <RefreshIcon/>
     </Stack>
    </Grid>

    <Grid item xs={12} sx={{marginX:'20px'}}>
  
        <Grid item xs={12} sx={{marginX:'20px' , }}>
        <Stack   direction="row"  sx={{marginX:'20px' , height:'40px'}}
  justifyContent="space-between"  spacing={0} >
    
            <h3>
                Occasions You Cater
            </h3>
            <Button variant="contained" color="success" startIcon={<AddIcon />}  onClick={handleClickOpen('paper')}>
    Add Occasions
</Button>
{/* <Dialog

        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      Select Occasions from below
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{width:'450px'}} dividers={scroll === 'paper'}   >
          <DialogContentText id="alert-dialog-slide-description">
          <div className="image-text-container">
      <div className="image-container">
      <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="" className="nav-avatar" />

      </div>
      <div className="text-container">
     <span>hashmath</span>
      </div>
    </div>
    <div className="checkbox-container">
    <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog> */}
       <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">   Select Occasions from below</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers={scroll === 'paper'}sx={{width:'470px'}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[1,2,3,4,5,6,7,8,9].map(()=>{
              return(

           <div className="image-text-container ">
     <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}
>
<Stack
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}
>

      <div className="image-container">
      <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="" className="nav-avatar" />

      </div>

      <div className="text-container">
     <span>hashmath</span>
      </div>
</Stack>

    <div className="checkbox-container">
    <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
</Stack>
    </div>
              )
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color='success' onClick={handleClose} fullWidth>
 Add Occasions
</Button>
        </DialogActions>
      </Dialog>
            </Stack>
    
            </Grid>
      
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
           

        </Grid>
    </Grid>
    </>
  )
}

export default Occasions
