import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

import '../assets/css/home.css'; // Import your custom CSS file for styling
import Validation from '../assets/js/Loginvalidation';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      username: username,
      password: password
    });
    
    setErrors(Validation({ username, password }));
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "http://51.20.138.46/account/api/token/");
    xhr.setRequestHeader("Content-Type", "application/json");
 
    xhr.send(data);
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
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
