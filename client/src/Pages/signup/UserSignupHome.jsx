import { useNavigate } from "react-router-dom";
import Usersignup from "./Usersignup";
import { 
    Box, 
    Container, 
    Typography, 
    Button, 
    AppBar,
    Toolbar
} from '@mui/material';

const UserSignupHome = () =>{
    const navigate = useNavigate();
    const handleAdminLogin = (e) =>{
        e.preventDefault();
        navigate("/admin-login");
    }

    return(
        <Box 
            sx={{
                minHeight: '100vh',
                background: "#000000",
                overflow: 'hidden'
            }}
        >
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontWeight: 'bold',
                            color: 'white',
                            py: 1
                        }}
                    >
                        Delta SmartBoard
                    </Typography>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleAdminLogin}
                        sx={{
                            borderWidth: 3,
                            borderRadius: 4,
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        Admin Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    minHeight: '85vh'
                }}>
                    <Usersignup/>
                </Box>
            </Container>
        </Box>
    );
}

export default UserSignupHome;