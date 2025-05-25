import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContex';

export const Atd_popUp = ({ message,socketref }) => {
     const navigate = useNavigate();
         const{roomid}=useContext(ThemeContext);
     
  const handleCopy = () => {
    navigator.clipboard.writeText(message);
     
       localStorage.removeItem('mark');
        localStorage.removeItem('students');
        localStorage.removeItem('username');
       

        
    navigate('/');
    
   
  };

  return (
    <div>
      <p><strong>Student Attendance</strong> {message}</p>
      <button
        onClick={handleCopy}
        style={{
          background: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '5px'
        }}
      >
        Copy anp leave
      </button>
      
    </div>
  );
};
