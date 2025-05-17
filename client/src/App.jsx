import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Pages/Home';
import { ThemeProvider } from './ThemeContex';
import Hero from './Pages/User';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './Pages/Admin';
import AdminLogin from './Pages/login/AdminLogin';
import Adminsignup from './Pages/signup/Adminsignup';
import UserLogin from './Pages/login/UserLogin';
import Usersignup from './Pages/signup/Usersignup';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/admin-login' element={<AdminLogin />} /> 
          <Route path='/admin-signup' element={<Adminsignup />} /> 
          <Route path='/user-login' element={<UserLogin />} /> 
          <Route path='/user-signup' element={<Usersignup />} /> 
          
          <Route path="/editor/:roomid" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
