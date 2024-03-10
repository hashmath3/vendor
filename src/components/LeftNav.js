import { Link, NavLink } from "react-router-dom"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AnnouncementIcon from '@mui/icons-material/Announcement';
// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });


const leftnav = [
    { "id": "1", "name": "Dashboard", "icon": <StackedBarChartRoundedIcon />, "url": "/" },
    { "id": "2", "name": "inquiries", "icon": <EditNoteIcon />, "url": "/inquiries" },
    { "id": "6", "name": "reviews", "icon": <AnnouncementIcon />, "url": "/reviews" },
    { "id": "7", "name": "Cuisines", "icon": <RestaurantRoundedIcon />, "url": "/cuisines" },
    { "id": "3", "name": "occasions", "icon": <CelebrationRoundedIcon />, "url": "/occasions" },
    { "id": "4", "name": "packages", "icon": <WebAssetRoundedIcon />, "url": "/packages " },
    { "id": "8", "name": "Bussiness Profile", "icon": <PersonRoundedIcon />, "url": "/notification" },
    { "id": "5", "name": "Photo gallery", "icon": <PhotoLibraryRoundedIcon />, "url": "/settings/?vendorId" },
    { "id": "6", "name": "branches", "icon": <BusinessRoundedIcon />, "url": "/settings/?vendorId" }
  ]

const LeftNav = () => {
    // const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
  
    const toggleDrawer = () => {
      setOpenDrawer(!openDrawer);
    };
    return (
        <div className="nav-bg">
           <div className="red-nav-bg">
           <Stack direction='row' alignItems="center" spacing={2} sx={{ marginBottom: '20px'}}>
           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} className="mobile-menu">
            <MenuIcon />
          </IconButton>
         <RestaurantMenuIcon className="text-white" />  <h2 className="text-white">CATERER PAGE</h2>
            </Stack> 

            <Stack direction="row" alignItems="center" justifyContent="space-between" className="mobile-none">
                <Stack direction="row" alignItems="center" spacing={2}>
                   <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="" className="nav-avatar" />
                   <div>
                    <h2 className="m-0 text-white nav-username">Venky D</h2>
                    <p className="m-0 text-white nav-gmail">admin@gmail.com</p>
                   </div>
                </Stack>
                <Stack>
                    <NotificationsNoneIcon className="text-white" />
                </Stack>
            </Stack>
           </div>
          
          <div className="nav-bottom mobile-none">
            {leftnav.map((item) =>{
              return  (
                   <NavLink className="text-white nav-links" to={item.url}> 
                   <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                  <span className="left-line"></span> <span>{item.icon} </span> <span className="nav-name">{item.name}</span>
                   </Stack>
                    </NavLink>
              )
            })}
          </div>

          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer} >
        <div style={{backgroundColor: 'red'}}>
          {/* Here you can render your mobile navigation items */}
          {leftnav.map((item) => (
            <NavLink className="text-white nav-links" to={item.url} key={item.name}> 
              <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                <span className="left-line"></span> <span>{item.icon} </span> <span className="nav-name">{item.name}</span>
              </Stack>
            </NavLink>
          ))}
        </div>
      </Drawer>
        </div>
    )
}

export default LeftNav
