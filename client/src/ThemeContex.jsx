
import { use, useEffect } from "react";
import { Children, createContext, useState } from "react";

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const[pen,setpen]=useState(15);
    const[penColor,setpenColor]=useState('red');
    const[showpen,setshowpen]=useState(false);
    const[username,setusername]=useState();
    const [atd,setatd]=useState([]);
    const[mark,setmark]= useState(Array(100).fill(0));
    const[rollnumber,setrollnumber]=useState();
      const [roomid, setroomid] = useState('');
      const[student,setstudent]=useState([{}]);
      //load username
        useEffect(() => {
    const storedUsername = JSON.parse(localStorage.getItem("username"));
    if (storedUsername) {
      setusername(storedUsername);
    }

   
  }, []);


  useEffect(() => {
  const storedStudents = JSON.parse(localStorage.getItem("students"));
  if (storedStudents && Array.isArray(storedStudents)) {
    setstudent(storedStudents);
  }
}, []);


    const themeValue={
        pen,
        penColor,
        setpen,
        setpenColor,
        showpen,
        setshowpen,
        username,
        setusername,
        atd,setatd,
        mark,setmark,
        rollnumber,setrollnumber,
        roomid,setroomid,
        student,setstudent
    }
    return(
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}