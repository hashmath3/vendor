import { Outlet, Link } from "react-router-dom";
import LeftNav from "../components/LeftNav";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Layout = () => {
  return (
    <>
     {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container spacing={0} >
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
        <LeftNav />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9.5}>
        <Outlet />

        </Grid>
      </Grid>
    {/* </Box> */}
    

    </>
  )
};

export default Layout;