import { useNavigate } from "react-router-dom";
import Adminsignup from "./Adminsignup";
import { 
    Box, 
    Container, 
    Typography, 
    Button, 
    AppBar,
    Toolbar
} from '@mui/material';

const AdminSignupHome = () => {
    const navigate = useNavigate();
    const handleUserLogin = (e) =>{
        e.preventDefault();
        navigate("/user-login");
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
                        onClick={handleUserLogin}
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
                        User Login
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
                    <Adminsignup/>
                </Box>
            </Container>
        </Box>
    );
}

export default AdminSignupHome;