import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import Validation from '../assets/js/Signupvalidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    username: '',
    phoneNumber: '',
    password: '',
    email: '',
    location: '',
    image: '',
    access: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (!errors.name && !errors.password && !errors.email) {
      try {
        const response = await axios.post('http://localhost:5000/api/users/new', {
          Name: values.name,
          Username: values.username,
          PhoneNumber: values.phoneNumber,
          Password: values.password,
          Email: values.email,
          Location: values.location,
          Image: values.image,
          Access: values.access,
        });

        console.log(response.data); // Log the response from the server
        navigate('/'); // Redirect after successful signup
      } catch (error) {
        console.error('Error:', error);
        // Handle errors or display error messages to the user
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box component="form" width="90%">
          <Typography variant="h4" align="center" gutterBottom>
            Sign-Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="name"
                onChange={handleInput}
                type="text"
                label="Name"
                placeholder="Enter name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? errors.name : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="username"
                onChange={handleInput}
                type="text"
                label="Username"
                placeholder="Enter username"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username ? errors.username : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phoneNumber"
                onChange={handleInput}
                type="tel"
                label="Phone Number"
                placeholder="Enter phone number"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber ? errors.phoneNumber : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="password"
                onChange={handleInput}
                type="password"
                label="Password"
                placeholder="Enter password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="password"
                onChange={handleInput}
                type="password"
                label="Password"
                placeholder="Enter password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                onChange={handleInput}
                type="email"
                label="Email"
                placeholder="Enter email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="location"
                onChange={handleInput}
                type="text"
                label="Location"
                placeholder="Enter location"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.location}
                helperText={errors.location ? errors.location : ''}
              />
            </Grid>
          
          </Grid>

          <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
            Sign up
          </Button>

          <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
            Ready to log in? <Link to={'/Login'}><strong>Log in</strong></Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
