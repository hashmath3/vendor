import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search'; 
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const nothIndian = [
    'Awadhi',
    'Bihari',
    'Bhojpuri',
    'Mughlai',
  ];
  const southIndian = [
    'Andhra',
    'Tamil',
    'Hyderabadi',
    'karnataka',
  ];
  const eastIndian = [
    'Bengali',
    'Jharkhandi',
    'Odia',
    'Oriya',
  ];

  const westIndian = [
    'Gaon',
    'Gujarathi',
    'Parsi',
    'Rajasthani',
  ];
  const northEastIndian = [
    'Assamese',
    'Naga',
    'Tiripuri',
    'Manipuri',
  ];
  const otherIndian = [
    'Indian Chinese',
    'Jain',
    'Sindhi',
    'Oriya',
  ];
  
  const international = [
    'African',
    'American',
    'British',
    'Canadian',
  ];


const Cuisines = () => {
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonthIndex];
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    
    const formattedDate = `${currentMonthName} ${currentDay}, ${currentYear}`;
 
      const [slectedNorthIndian, setslectedNorthIndian] = React.useState([]);
      const [slecteSouthindian, setslecteSouthindian] = React.useState([]);
      const [selectedWestIndian, setselectedWestIndian] = React.useState([]);
      const [selectedNorthEastIndian, setselectedNorthEastIndian] = React.useState([]);
      const [selectedInternational, setselectedInternational] = React.useState([]);
      const [selectedOther, setselectedOther] = React.useState([]);
      const [selectedEastIndian, setselectedEastIndian] = React.useState([]);

      const handleNorthChange = (event) => {
        const {
          target: { value },
        } = event;
        setslectedNorthIndian(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };


      const handleSouthChange = (event) => {
        const {
          target: { value },
        } = event;
        setslecteSouthindian(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleEastChange = (event) => {
        const {
          target: { value },
        } = event;
        setselectedEastIndian(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleWestChange = (event) => {
        const {
          target: { value },
        } = event;
        setselectedWestIndian(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleNorthEastChange = (event) => {
        const {
          target: { value },
        } = event;
        setselectedNorthEastIndian(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleOtherChange = (event) => {
        const {
          target: { value },
        } = event;
        setselectedOther(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const handleInternationalChange = (event) => {
        const {
          target: { value },
        } = event;
        setselectedInternational(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      const [selectedCuisines, setSelectedCuisines] = useState([]);
      const handleSubmit = () => {
        const allSelectedCuisines = [
          ...slectedNorthIndian,
          ...slecteSouthindian,
          ...selectedEastIndian,
          ...selectedWestIndian,
          ...selectedNorthEastIndian,
          ...selectedOther,
          ...selectedInternational,
        ];
        setSelectedCuisines(allSelectedCuisines);
      };

{console.log(selectedCuisines,"selectedCuisines")}
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

  <Grid  direction="row"
  justifyContent="center"
  alignItems="center" item xs={12}>

  <h2 style={{display:'flex', justifyContent:'center', alignItems:'center' , marginBottom:0}} >
    Choose Your Cuisines From the List
  </h2>
  </Grid>
  <Grid  direction="row"
  justifyContent="center"
  alignItems="center" item xs={12}>
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
    </div>


  </Grid>

  <Grid item xs={4}>
  <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">North Indian</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={slectedNorthIndian}
          onChange={handleNorthChange}
          input={<OutlinedInput label="North Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {nothIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={slectedNorthIndian.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">South Indian</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={slecteSouthindian}
          onChange={handleSouthChange}
          input={<OutlinedInput label="South Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {southIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={slecteSouthindian.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">East Indian</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedEastIndian}
          onChange={handleEastChange}
          input={<OutlinedInput label="East Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {eastIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedEastIndian.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">West Indian</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedWestIndian}
          onChange={handleWestChange}
          input={<OutlinedInput label="East Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {westIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedWestIndian.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">North East Indian</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedNorthEastIndian}
          onChange={handleNorthEastChange}
          input={<OutlinedInput label="East Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {northEastIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedNorthEastIndian.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 }}>
        <InputLabel id="demo-multiple-checkbox-label">Other Indian Cuisines</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedOther}
          onChange={handleOtherChange}
          input={<OutlinedInput label="East Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {otherIndian.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedOther.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
        </Grid>

    <Grid item xs={4}>
    <FormControl sx={{ m: 1, width: 330, height:35 , }}>
        <InputLabel id="demo-multiple-checkbox-label">International Cuisines</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedInternational}
          onChange={handleInternationalChange}
          input={<OutlinedInput label="East Indian" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {international.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedInternational.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} sx={{ display:'flex', justifyContent:'center'}}>
            
        <Button onClick={handleSubmit} sx={{marginTop:'20px', display:'flex', justifyContent:'center' , backgroundColor:'#940d0d', borderRadius:'20px'}} variant="contained" size="large">
          Submit
        </Button>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={2}>
            </Grid>
        <Grid item xs={8}>
        <hr style={{ border: '1px solid #940d0d'}}></hr>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid  direction="row"
  justifyContent="center"
  alignItems="center" item xs={12}>

  <h2 style={{display:'flex', justifyContent:'center', alignItems:'center' , marginBottom:0}} >
   Cuisines You Cater
  </h2>
  </Grid>
  <Grid item xs={2}>

  </Grid>
  <Grid container spacing={0} sx={{justifyContent:'center',display:'flex'  ,marginX:'190px'}}>
  {selectedCuisines?.map((item, index) => {
    return (
      <Grid item xs={4} key={index}>
        <Card sx={{ maxWidth: 150, maxHeight: 250, background: "#F8FAFB", padding: '10px', borderRadius: "10px", boxShadow: '  0px 3px 10px rgb(0 0 0 / 0.2)' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item}
            </Typography>

          </CardContent>
          <CardActions>
            {/* <Button 
              variant="contained"
              size="small"
              sx={{
                background: 'white',
                color: '#940d0d',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#940d0d',
                  justifyContent:'center',
                  display:'flex',
                  paddingX:'80px'
                },
              }}
              startIcon={<CloseRoundedIcon />}
            >
            </Button> */}

          </CardActions>
        </Card>
      </Grid>
    )
  })}
</Grid>



   </Grid>
   
   
   </>
  )
}

export default Cuisines
