import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Pages/Home';
import { ThemeProvider } from './ThemeContex';
import Hero from './Pages/User';
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './Pages/Admin';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/admin/login' element={<Admin />} /> 
          <Route path="/editor/:roomid" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
