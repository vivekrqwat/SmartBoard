import React, { useEffect, useState } from 'react'
import Logout from '../../Component/Logout'

const AdminHome = () => {

  const data = [
    {
      subject: "Data Structures",
      date: "18/02/2025",
      day:"Wednesday",
      participants: "4,7,8,9,12,14,15,16,36,34,37,38,39,48,49,50,56"
    },
    {
      subject: "Data Structures",
      date: "17/02/2025",
      day:"Monday",
      participants: "2,4,6,8,22,24,25,26,31,32,35,37,40,41"
    },
    {
      subject: "Data Structures",
      date: "21/02/2025",
      day:"Friday",
      participants: "1,3,4,5,7,8,14,15,19,21,25,26,27,35,38,39"
    }
  ]

  const [sortedData,setSortedData] = useState([]);

  function dateToNumber(dateStr) {
    const parts = dateStr.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return parseInt(year + month + day); // e.g., "20250218" as number
  }
  useEffect(() => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (dateToNumber(data[j].date) < dateToNumber(data[j + 1].date)) {
          // Swap
          const temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
  });
  // Bubble sort (descending)



  return (
    <div className='container-fluid m-0 p-0 w-100' style={{ background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)" }}>
      <Logout />
      <div className='d-flex' style={{ height: "92vh" }}>
        <div className='w-25 border-end border-secondary border-4 pt-3' style={{backgroundColor:"rgba(176, 225, 15, 0.5)"}}>
          <h3 className='text-center fw-bold border-bottom border-secondary border-3 pb-3 font-monospace'>Previous Meetings</h3>
          {data.map((item,index) => (
            <div key={index} className='border rounded-4 border-success border-4 m-2'>
              <p className='fs-3 text-center text-danger' style={{textDecoration:"underline",textDecorationThickness:"3px"}}>{item.subject}</p>
              <div className='px-3 d-flex justify-content-between'>
                <p className='fs-4'>{item.date}</p>
                <p className='fs-4'>{item.day}</p>
              </div>
            </div>
          ))}
        </div>
          {/* Provide option for creating room id here  */}
        <div className='w-75'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}

export default AdminHome