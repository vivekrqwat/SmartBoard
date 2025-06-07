import React, { useContext } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContex';
import useUserLogin from '../../Hooks/useUserLogin';
import axios from 'axios';
import toast from 'react-hot-toast';
export const Atd_popUp = ({ message,socketref }) => {
     const navigate = useNavigate();
         const{subject}=useContext(ThemeContext);
         const {user}=useUserLogin();
      const{roomid}=useParams()
  const handleCopy = () => {
    navigator.clipboard.writeText(message);


  console.log('clicked  ',roomid,user.fullname,subject,user.employee_id);

const participants1=message.split(",");
console.log(participants1);
const cleanParticipants = participants1[0] === 'None'
  ? []
  : participants1.filter(Boolean); 

  const payload={
  classroom_id:roomid,
  subject:subject,
  admin_id:user.employee_id,
  participants:cleanParticipants
}
try{
  axios.post("http://localhost:5000/classroom/api/createroom",payload,
     {
  headers: {
    'Content-Type': 'application/json'
  }
}
  )
}catch(e){
  toast('something went wrong',e);
  return;
}



     
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
