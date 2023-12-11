import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Validation from '../assets/js/Signupvalidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (!errors.name && !errors.password && !errors.email) {
      navigate('/');
    //   axios
    //     .post('http://localhost:8081/signup', values)
    //     .then((res) => {
    //       // 
    //       var Name = res.config.data;
    //       var JSO = JSON.parse(Name);
    //       console.log(JSO.email[0]);
    //     })
    //     .catch((err) => console.log(err));
    };
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} width="80%">
          <Typography variant="h4" align="center" gutterBottom>
            Sign-Up
          </Typography>

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

          <TextField
            name="email"
            onChange={handleInput}
            type="email"
            label="Email"
            placeholder="Enter Email"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email : ''}
          />

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
