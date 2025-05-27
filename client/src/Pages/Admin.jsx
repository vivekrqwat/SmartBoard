import { useState } from "react";
import AdminLogin from "./login/AdminLogin";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
    
const Admin = () => {
    const navigate = useNavigate();
    
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <AdminLogin />
        </Box>
    );
};

export default Admin;