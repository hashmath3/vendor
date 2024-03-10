import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, NavLink } from "react-router-dom"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Stack } from '@mui/material';


const topNav =[
  { "id": "1", "name": "Bussiness Profile", "icon": <PersonRoundedIcon />, "url": "/bussinessProfile" },
  { "id": "2", "name": "Settings", "icon": <SettingsIcon />, "url": "/settings" },
  { "id": "6", "name": "Logout", "icon": <LogoutIcon />, "url": "/" },
]

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const TopProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
           <Button aria-describedby={id} onClick={handleClick}>
         <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" />
      </StyledBadge> 
      </Button>
      

      <Popover 
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
>
<Typography sx={{ p: 2 }}> <List>
        {topNav.map((item, index) => (
          <ListItem key={index} sx={{padding:'0'}}>
            <NavLink className=" nav-links"   to={item?.url} component="a" color="inherit">
            <Stack direction="row" spacing={2} sx={{width: '100%', color:'#C33332'}}>
                <span className=""></span> <span>{item.icon} </span> <span className="nav-name">{item.name}</span>
              </Stack>
            </NavLink   >
            
          </ListItem>
        ))}
      </List></Typography>
  
</Popover>
    </div>
  )
}

export default TopProfile
