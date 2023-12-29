import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/home.css';
import Validation from '../assets/js/Loginvalidation';


function Login() {
  const [Loding,setLoding]=useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation({ username, password }));
  
    try {
       setLoding(true);
      const response = await fetch('http://51.20.138.46/account/api/token/?format=json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
      
      
      // Check if the login was successful
      if (response.ok) {
        var AccessToken =result.access
        var RefreshToken =result.refresh
        
        document.cookie = `username=${username}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
        document.cookie = `access=${AccessToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
        document.cookie = `refresh=${RefreshToken}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    
        navigate(`/?username=${username}`);
        window.location.reload();
      } else {
         
      }

      setLoding(false);
    } catch (error) {
      // Handle network errors here
      console.error('Error:', error);
      setLoding(false);
    }

  
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username" // Use the correct name attribute
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username ? errors.username : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password ? errors.password : ''}
          />
{Loding ? ( <Button loading variant="contained" className='btn btn-primary'   sx={{ mt: 3, mb: 2 }}  fullWidth>
<span className="loading loading-dots loading-lg"></span>
      </Button>
          ) : ( <Button
          className='btn btn-primary'
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>)



}

         



          <Link to="/Signup" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" color="primary" style={{ marginTop: '20px', cursor: 'pointer' }}>
              Create an account?
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
