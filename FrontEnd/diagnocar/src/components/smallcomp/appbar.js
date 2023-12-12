import * as React from 'react';
import {Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Select } from '@mui/material';
import translations from '../../assets/jsons/language.json';
import { changeTo, getLang,getLangeoptions} from '../../assets/js/langecode';

var langCode = getLang();
const languageOptions=getLangeoptions();
// Function to get translated text based on language and key
const getTranslatedText = (langCode, key) => {
  return translations[langCode][key] || key; // Return translation or key if not found
};
const handleLanguageChange = (event) => {
    changeTo(event.target.value);
    langCode = event.target.value ;
    window.location.reload();
  };


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
 
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link  to="/Login">  <MenuItem onClick={handleMenuClose}>Sign-in</MenuItem></Link>
      <Link  to="/Signup"> <MenuItem onClick={handleMenuClose}>Sign-up</MenuItem></Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p> {getTranslatedText(langCode, 'Messages')} </p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p> {getTranslatedText(langCode, 'Notifications')}</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           {getTranslatedText(langCode, 'NameOfAplication')}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder= {getTranslatedText(langCode, 'Search...')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           {/* Navigation Links */}
           
           
            {/* Navigation Links */}
      <Box sx={{ display: 'flex', gap: 7 }}>
        <Button color="inherit" component={Link} to="/Home">
        {getTranslatedText(langCode, 'home')}
        </Button>
        <Button color="inherit" component={Link} to="/About">
        {getTranslatedText(langCode, 'about')}
        </Button>
        <Button color="inherit" component={Link} to="/Posts">
        {getTranslatedText(langCode, 'posts')}
        </Button>
        <Button color="inherit" component={Link} to="/News">
        {getTranslatedText(langCode, 'news')}
        </Button>
      </Box>
      {/* End Navigation Links */}
          {/* End Navigation Links */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>




          <Select
        value={getLang()} // Set the currently selected language
        onChange={handleLanguageChange} // Handle language change
        label="Select Language"
        size='small'
        sx={{
          color: 'white', // Change the text color to white
          '& .MuiSelect-icon': {
            color: 'white', // Change the color of the dropdown icon to white
          },
          '& .MuiOutlinedInput-root': {
            border: 'none', // Hide the border
          },
          '& .MuiInputBase-root': {
            color: 'white', // Change the color of the selected value to white
          },
          '& .MuiList-root': {
            color: 'white', // Change the color of options' text to white
            backgroundColor: '#333', // Change the background color of the options
          },
        }}
        
        >
        {languageOptions.map((option) => (
          <MenuItem key={option.code} value={option.code}> {option.label} </MenuItem>
          ))}
      </Select>

       


            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error" >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge  color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
