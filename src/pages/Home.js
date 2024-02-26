import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CallIcon from '@mui/icons-material/Call';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const Home = () => {
  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  
  const formattedDate = `${currentMonthName} ${currentDay}, ${currentYear}`;


  const [exampleIndex, setExampleIndex] = useState(0);

  const handleExampleChange = (index) => {
    setExampleIndex(index);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
<Grid container spacing={2}>
  <Grid item xs={9}>
    <Stack   spacing={0} >

<h3>DASHBOARD</h3>
<span>
  Below is your Bussiness overview
</span>
<span>
{formattedDate}
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
<RefreshIcon color='error'/>
   </Stack>
  </Grid>
  <Grid item xs={12}   container
  direction="row"
  justifyContent="center"
  alignItems="center">
  <Box
      height={90}
      width={240}
      my={4}
      mx={3 }
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid #940d0d',    borderRadius: '10px' }}
    >
       <Grid item>
<VisibilityIcon sx={{color:"green", fontSize: 30 }}/>       </Grid>
       <Grid item xs={10}>
        <Stack spacing={0}>
          <span style={{ color: 'gray', fontWeight:'bold' }}>
            Total Number of Views
          </span>
          <h1 style={{margin:0}}>
            6254
          </h1>
        </Stack>
        </Grid>
    
    </Box>

  <Box
      height={90}
      width={240}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid #940d0d',    borderRadius: '10px' }}
      >
       <Grid item>
<ErrorRoundedIcon sx={{color:"green", fontSize: 30 }}/>       </Grid>
       <Grid item xs={10}>
        <Stack spacing={0}>
          <span style={{ color: 'gray', fontWeight:'bold' }}>
            Total Enquiries
          </span>
          <h1 style={{margin:0}}>
            5
          </h1>
        </Stack>
        </Grid>
    </Box>
      </Grid>


      <Grid item xs={6}>
      <Button color='error'
        variant={exampleIndex === 0 ? 'contained' : 'outlined'}
        onClick={() => handleExampleChange(0)}
        fullWidth
        sx={{ border: '2px solid #940d0d',    borderRadius: '10px' , }}

      >
     CUSTOMER ENQUIRES
      </Button>
        </Grid>
        <Grid item xs={6}>
        <Button color='error'
        variant={exampleIndex === 1 ? 'contained' : 'outlined'}
        onClick={() => handleExampleChange(1)}
        fullWidth 
        sx={{ border: '2px solid #940d0d',    borderRadius: '10px' , }}
      >
        CUSTOMER REVIEWS
      </Button>
        </Grid>
        <Grid xs={12}>

        <SwipeableViews index={exampleIndex} onChangeIndex={handleExampleChange}>
        <Grid container spacing={2}>
  <Grid item xs={12}   sx={{
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    marginTop:'10px'
  }}>
All  Customer Details listed Below
  </Grid>

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
      color: '#940d0d',
      '&:hover': {
        color: 'white',
        backgroundColor: '#940d0d',
      },
    }}
    startIcon={<CallIcon />}
  >
    Call
  </Button>
  </Grid>
  </Grid>
</Card>
  </Grid>
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
      color: '#940d0d',
      '&:hover': {
        color: 'white',
        backgroundColor: '#940d0d',
      },
    }}
    startIcon={<CallIcon />}
  >
    Call
  </Button>
  </Grid>
  </Grid>
</Card>
  </Grid>
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
      color: '#940d0d',
      '&:hover': {
        color: 'white',
        backgroundColor: '#940d0d',
      },
    }}
    startIcon={<CallIcon />}
  >
    Call
  </Button>
  </Grid>
  </Grid>
</Card>
  </Grid>
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
      color: '#940d0d',
      '&:hover': {
        color: 'white',
        backgroundColor: '#940d0d',
      },
    }}
    startIcon={<CallIcon />}
  >
    Call
  </Button>
  </Grid>
  </Grid>
</Card>
  </Grid>

</Grid>
<Grid container spacing={2}>
  <Grid item xs={12}  sx={{
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    marginTop:'10px'
  }}  >
All Reviews
  </Grid>

  <Grid item xs={8}>
  </Grid>
  <Grid item xs={4}>
<Stack   direction="row" >
  <span style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
    Sort reviews by:
  </span>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
   
          <MenuItem value={10}>Most relevant</MenuItem>
          <MenuItem value={20}>Newest first</MenuItem>
          <MenuItem value={30}>oldest first</MenuItem>
        </Select>
        
      </FormControl>

</Stack>
  </Grid>


  <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft:0 }}>
  <Avatar  alt="Remy Sharp" src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" />
  </Grid>
  

  <Grid item xs={10} sx={{paddingRight:'10px'}}>
    <Stack>
      <Stack  direction="row"  justifyContent="space-between">
<span>
  
      Andhrew hernandez
</span>
<span>
  Jan 27th , 4:30pm
</span>
      </Stack>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quidem quod hic dolorem totam, doloribus earum voluptates molestias atque voluptatum impedit amet tempore ab possimus fuga aliquid illum odio officiis.
      </p>

    </Stack>

  </Grid>
  <Grid item xs={1}>

  </Grid>
 <Grid item xs={12}>
  <hr style={{color:"black" , width:"90%"}}/>
  </Grid> 
  <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft:0 }}>
  <Avatar  alt="Remy Sharp" src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" />
  </Grid>
  

  <Grid item xs={10} sx={{paddingRight:'10px'}}>
    <Stack>
      <Stack  direction="row"  justifyContent="space-between">
<span>
  
      Andhrew hernandez
</span>
<span>
  Jan 27th , 4:30pm
</span>
      </Stack>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quidem quod hic dolorem totam, doloribus earum voluptates molestias atque voluptatum impedit amet tempore ab possimus fuga aliquid illum odio officiis.
      </p>

    </Stack>

  </Grid>
  <Grid item xs={1}>

  </Grid>
  <Grid item xs={12}>
  <hr style={{color:"black" , width:"90%"}}/>
  </Grid> 
  <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft:0 }}>
  <Avatar  alt="Remy Sharp" src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" />
  </Grid>
  

  <Grid item xs={10} sx={{paddingRight:'10px'}}>
    <Stack>
      <Stack  direction="row"  justifyContent="space-between">
<span>
  
      Andhrew hernandez
</span>
<span>
  Jan 27th , 4:30pm
</span>
      </Stack>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quidem quod hic dolorem totam, doloribus earum voluptates molestias atque voluptatum impedit amet tempore ab possimus fuga aliquid illum odio officiis.
      </p>

    </Stack>

  </Grid>
  <Grid item xs={1}>

  </Grid>
 <Grid item xs={12}>
  <hr style={{color:"black" , width:"90%"}}/>
  </Grid> 
  <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft:0 }}>
  <Avatar  alt="Remy Sharp" src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" />
  </Grid>
  

  <Grid item xs={10} sx={{paddingRight:'10px'}}>
    <Stack>
      <Stack  direction="row"  justifyContent="space-between">
<span>
  
      Andhrew hernandez
</span>
<span>
  Jan 27th , 4:30pm
</span>
      </Stack>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quidem quod hic dolorem totam, doloribus earum voluptates molestias atque voluptatum impedit amet tempore ab possimus fuga aliquid illum odio officiis.
      </p>

    </Stack>

  </Grid>
  <Grid item xs={1}>

  </Grid>
 <Grid item xs={12}>
  <hr style={{color:"black" , width:"90%"}}/>
  </Grid> 


</Grid>

      </SwipeableViews>
        </Grid>

 
</Grid>
    
    </>
  )
}

export default Home
