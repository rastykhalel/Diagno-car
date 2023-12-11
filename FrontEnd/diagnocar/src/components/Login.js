import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../assets/css/home.css'; // Import your custom CSS file for styling
import Validation from '../assets/js/Loginvalidation';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (!errors.password && !errors.email) {
    navigate('/');

    // try {
    //   if (Object.keys(errors).length === 0) {
    //     const response = await axios.post(
    //       'http://13.51.6.35:8000/account/api/token/',
    //       {
    //         username: values.username,
    //         password: values.password,
    //       }
    //     );

    //     const accessToken = response.data.access_token;

    //     if (accessToken) {
    //       Cookies.set('accessToken', accessToken);
    //       navigate('/home');
    //     } else {
    //       alert('Token not received');
    //     }
    //   } else {
    //     alert('Please fix the form errors before submitting');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('An error occurred during login');
    // }
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
            value={values.username}
            onChange={handleInputChange}
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
            value={values.password}
            onChange={handleInputChange}
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
