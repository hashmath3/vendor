import React, { useState ,useRef} from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CallIcon from '@mui/icons-material/Call';
import TopProfile from '../components/topProfile';

const Inquiries = () => {

    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonthIndex];
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    
    const formattedDate = `${currentMonthName} ${currentDay}, ${currentYear}`;
  return (
 
  <>
  <Grid container spacing={2}>


    <Grid item xs={9}>
        <Stack   spacing={0} >
    
    <h2 style={{marginBottom:1}}>Customer Inquiries</h2 >
    <span>
     All customer details listed below
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
<TopProfile/>
       </Stack>
      </Grid>
      {/* <Box component="section"     sx={{   borderRadius: '12px',
  border: '1px solid #E5EAF2' }}> */}
   <Grid item xs={8}>

    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >

        <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
        display:'flex',
        justifyContent:'center',    
      }}
    >

<FormControl fullWidth sx={{ m: 1    }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount" >Search your cuisine...</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchRoundedIcon/></InputAdornment>}
            label="search your cuisine..."
          />
        </FormControl>
    </Box>
    <Button variant="contained" color='error'     sx={{ border: '2px solid #940d0d',    borderRadius: '10px' , }}>
  Success
</Button>
    </div>


  </Grid>
   <Grid item xs={4} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

   <Button variant="contained" color='error' startIcon={<CalendarMonthIcon  />}   sx={{ border: '2px solid #940d0d',    borderRadius: '10px' , }}>
  Select Date
</Button>


   </Grid>
   {[1,2,3,4,5,6,7,8,9].map(()=>{
    return(
        <Grid item xs={12} sx={{marginX:"70px " ,marginY: '10px'}} >
        <Card sx={{background:"#F8FAFB", padding:'10px', borderRadius:"10px",  boxShadow: '  0px 3px 10px rgb(0 0 0 / 0.2)'}}>
          <Grid container>
            <Grid item xs={10}>
            <Stack   spacing={0} >
        
        <h3>Venkat</h3>
        <span>
        {formattedDate}
        </span>
        <span>
         Buffet , fixed 500 per head , veg
        </span>
            </Stack>
            </Grid>
              <Grid item xs={2}  
              sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }} >
              <Button
          
            variant="contained"
            size="small"
            sx={{
              background:'white',
              color: 'green',
              '&:hover': {
                color: 'white',
                backgroundColor: 'green',
              },
            }}
            startIcon={<CallIcon />}
          >
            Call Now
          </Button>
          </Grid>
          </Grid>
        </Card>
          </Grid>
    )
})}
    {/* </Box> */}
      </Grid>
  </>

  )
}

export default Inquiries
