import * as React from 'react';
import { Link } from 'react-router-dom';
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
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Select } from '@mui/material';
import translations from '../../assets/jsons/language.json';
import { changeTo, getLang, getLangeoptions } from '../../assets/js/langecode';
import { AccountBox, Newspaper, PostAddSharp, Home, Login, AppRegistration } from '@mui/icons-material';
import '../../assets/css/home.css';
import SwipeableTemporaryDrawer from './smallcompindashbord/notfication';
import DisneyThemedCheckbox from './smallcompindashbord/disnuuithem';


var langCode = getLang();
const languageOptions = getLangeoptions();
const getTranslatedText = (langCode, key) => {
  return translations[langCode][key] || key; // Return translation or key if not found
};
const handleLanguageChange = (event) => {
  changeTo(event.target.value);
  langCode = event.target.value;
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

export default function PrimarySearchAppBar(props) {
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
    <>

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

 
        <MenuItem>
          <IconButton size="small" aria-label="Login" color="inherit">
            <Badge color="error">
              <Login />
            </Badge>
          </IconButton>
          <p><Button color="inherit" component={Link} to="/Login">
            {getTranslatedText(langCode, 'Login')}
          </Button></p>
        </MenuItem>

        <MenuItem>
          <IconButton size="small" aria-label="Signup" color="inherit">
            <Badge color="error">
              <AppRegistration />
            </Badge>
          </IconButton>
          <p><Button color="inherit" component={Link} to="/Signup">
            {getTranslatedText(langCode, 'Signup')}
          </Button></p>
        </MenuItem>

      </Menu>
    </>
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
        <IconButton size="small" aria-label="home" color="inherit">
          <Badge color="error">
            <Home />
          </Badge>
        </IconButton>
        <p><Button color="inherit" component={Link} to="/#home">
          {getTranslatedText(langCode, 'home')}
        </Button></p>
      </MenuItem>


      <MenuItem>
        <IconButton size="small" aria-label="News" color="inherit">
          <Badge color="error">
            <Newspaper />
          </Badge>
        </IconButton>
        <p>
          <Button color="inherit" component={Link} to="/News">
            {getTranslatedText(langCode, 'news')}
          </Button></p>
      </MenuItem>


      <MenuItem>
        <IconButton size="small" aria-label="Posts" color="inherit">
          <Badge color="error">
            <PostAddSharp />
          </Badge>
        </IconButton>
        <p><Button color="inherit" component={Link} to="/Posts">
          {getTranslatedText(langCode, 'posts')}
        </Button></p>
      </MenuItem>



      <MenuItem>
        <IconButton size="small" aria-label="" color="inherit">
          <Badge color="error">
            <AccountBox />
          </Badge>
        </IconButton>
        <p> <Button color="inherit" component={Link} to="/About">
          {getTranslatedText(langCode, 'about')}
        </Button></p>
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
              placeholder={getTranslatedText(langCode, 'Search...')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
 

         <DisneyThemedCheckbox  />


          <Box sx={{
            display: 'flex',
            gap: 3,
            width: '40rem',
            height: '40px',
            '@media (max-width: 768px)': { // Adjust the breakpoint as needed
              display: 'none', // Hide the buttons on mobile devices
            }
          }}>
            <Button
              component={Link}
              to="/Home"
              color="inherit"
              startIcon={<Home fontSize="small" />}
            >
              {getTranslatedText(langCode, 'home')}
            </Button>

            <Button
              component={Link}
              to="/News"
              color="inherit"
              startIcon={<Newspaper fontSize="small" />}
            >
              {getTranslatedText(langCode, 'news')}
            </Button>

            <Button
              component={Link}
              to="/Posts"
              color="inherit"
              startIcon={<PostAddSharp fontSize="small" />}
            >
              {getTranslatedText(langCode, 'posts')}
            </Button>

            <Button
              component={Link}
              to="/About"
              color="inherit"
              startIcon={<AccountBox fontSize="small" />}
            >
              {getTranslatedText(langCode, 'about')}
            </Button>


          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>


          {props.parameterName ? (
             <SwipeableTemporaryDrawer  />
          ) : null}

          <Button
            onClick={handleProfileMenuOpen}
            sx={{ backgroundColor: '#1976D2', color: 'white' }}
            startIcon={<AccountCircle sx={{ fontSize: '3.5rem' }} />}
          >
            {props.parameterName ? (
              props.parameterName
            ) : (
              getTranslatedText(langCode, 'sign-in')
            )}
          </Button>


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
              <MenuItem key={option.code} value={option.code}>  {option.label} </MenuItem>
            ))}
          </Select>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
