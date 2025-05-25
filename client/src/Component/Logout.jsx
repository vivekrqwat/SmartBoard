import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authContext/AuthContext";
import toast from 'react-hot-toast';
import { 
    Box, 
    Button
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Logout = () => {
    const { setAuthUser, setUser } = useAuthContext();
    const navigate = useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user-info");
        setAuthUser(null);
        localStorage.removeItem("user");
        setUser(null);
        toast.success("Logout Successfully");
        navigate("/");
    }

    const userName = "Rogue Trooper"; // Replace with dynamic username later

    return (
        <Box 
            sx={{ 
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 1000
            }}
        >
            <Button
                variant="outlined"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                }}
            >
                Logout
            </Button>
        </Box>
    );
}

export default Logout;