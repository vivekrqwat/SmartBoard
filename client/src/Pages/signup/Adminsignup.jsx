import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAdminSignup from '../../Hooks/useAdminSignup';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Link as MuiLink,
    Stack
} from '@mui/material';

const Adminsignup = () => {
    const { signup } = useAdminSignup();

    const [input, setInput] = useState({
        email: "",
        fullname: "",
        employee_id: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                py: 5,
                px: 5,
                my: 5,
                mx: 5,
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: 4,
                maxWidth: '500px'
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    mb: 4,
                    color: '#000000'
                }}
            >
                Admin Sign Up
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Box>
                        <Typography
                            component="label"
                            variant="h6"
                            sx={{ 
                                fontWeight: 'bold', 
                                mb: 1, 
                                display: 'block',
                                color: '#000000'
                            }}
                        >
                            Full Name
                        </Typography>
                        <TextField
                            fullWidth
                            value={input.fullname}
                            onChange={(e) => setInput({ ...input, fullname: e.target.value })}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#000000',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000000',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            component="label"
                            variant="h6"
                            sx={{ 
                                fontWeight: 'bold', 
                                mb: 1, 
                                display: 'block',
                                color: '#000000'
                            }}
                        >
                            Email
                        </Typography>
                        <TextField
                            fullWidth
                            type="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#000000',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000000',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            component="label"
                            variant="h6"
                            sx={{ 
                                fontWeight: 'bold', 
                                mb: 1, 
                                display: 'block',
                                color: '#000000'
                            }}
                        >
                            Employee ID
                        </Typography>
                        <TextField
                            fullWidth
                            value={input.employee_id}
                            onChange={(e) => setInput({ ...input, employee_id: e.target.value })}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#000000',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000000',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            component="label"
                            variant="h6"
                            sx={{ 
                                fontWeight: 'bold', 
                                mb: 1, 
                                display: 'block',
                                color: '#000000'
                            }}
                        >
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            type="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#000000',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000000',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography
                            component="label"
                            variant="h6"
                            sx={{ 
                                fontWeight: 'bold', 
                                mb: 1, 
                                display: 'block',
                                color: '#000000'
                            }}
                        >
                            Confirm Password
                        </Typography>
                        <TextField
                            fullWidth
                            type="password"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    '&:hover fieldset': {
                                        borderColor: '#000000',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#000000',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#000000',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                width: '100%',
                                backgroundColor: '#000000',
                                color: 'white',
                                borderRadius: 2,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                py: 1.5,
                                '&:hover': {
                                    backgroundColor: '#333333',
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <MuiLink
                    component={Link}
                    to="/admin-login"
                    sx={{
                        color: '#000000',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'none',
                            color: '#333333'
                        }
                    }}
                >
                    Already have an account?{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: '#000000',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            textUnderlineOffset: '5px',
                            textDecorationColor: '#000000',
                            textDecorationThickness: '2px'
                        }}
                    >
                        Login
                    </Typography>
                </MuiLink>
            </Box>
        </Paper>
    );
}

export default Adminsignup;
