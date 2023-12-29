import React from 'react';
import '../assets/css/font.css';
import { themfromcockie } from '../assets/js/theme';
import { getCookieValue } from '../assets/js/userauth';
import Dashbord from './smallcomp/parts/system/dashbord';
import Search from './smallcomp/parts/system/search';
import PersistentDrawerRight from './smallcomp/smallcomponentserch/appbarAndDrawer';
import { styled } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';

themfromcockie();

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: "relative",
  })
);

function SearchcodeSystem(param) {

  const usernameProfile = getCookieValue('username');
  const id = param.part;
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let componentToRender;

  switch (id) {
    case '1':
      componentToRender = <Dashbord username={usernameProfile}  />;
      break;
    case '2':
      componentToRender = <Search username={usernameProfile}  />;
      break;
    default:
      componentToRender = <div>Not Found</div>;
      break;
  }

  return (
    <Box sx={{ display: "flex" }} className='bg-base-200 text-base-content'>
    <CssBaseline />
   
   <Main open={open} sx={{marginTop:'60px'}}>
    
      {componentToRender}
   </Main>

      <PersistentDrawerRight username={usernameProfile} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}  />
    

  </Box>
  );
}

export default SearchcodeSystem;
