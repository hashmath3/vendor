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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

const Reviews = () => {
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonthIndex];
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    
    const formattedDate = `${currentMonthName} ${currentDay}, ${currentYear}`;
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <Grid container spacing={2}>


    <Grid item xs={9}>
        <Stack   spacing={0} >
    
    <h2 style={{marginBottom:1}}>Customer Reviews</h2 >
    <span>
     All customer reviews listed below
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
    <RefreshIcon sx={{ marginTop: '20px', color:'#C33332'}} />
       </Stack>
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
      </Grid>
  )
}

export default Reviews
