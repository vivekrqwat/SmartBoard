import React, { useEffect, useState } from 'react'
import Logout from '../../Component/Logout'
import Login from '../../Component/HomepageComponent/Login';

const AdminHome = () => {

  const data = [
    {
      subject: "Data Structures",
      date: "18/02/2025",
      day: "Wednesday",
      participants: "4,7,8,9,12,14,15,16,36,34,37,38,39,48,49,50,56"
    },
    {
      subject: "Data Structures",
      date: "17/02/2025",
      day: "Monday",
      participants: "2,4,6,8,22,24,25,26,31,32,35,37,40,41"
    },
    {
      subject: "Data Structures",
      date: "21/02/2025",
      day: "Friday",
      participants: "1,3,4,5,7,8,14,15,19,21,25,26,27,35,38,39"
    }
  ]

  const [sortedData, setSortedData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  function dateToNumber(dateStr) {
    const parts = dateStr.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return parseInt(year + month + day); // e.g., "20250218" as number
  }

  useEffect(() => {
    const temp = [...data]
    for (let i = 0; i < temp.length - 1; i++) {
      for (let j = 0; j < temp.length - i - 1; j++) {
        if (dateToNumber(temp[j].date) < dateToNumber(temp[j + 1].date)) {
          // Swap
          const x = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = x;
        }
      }
    }
    setSortedData(temp);
  }, []);

  const handleInfo = (item) => {
    console.log(item);
    setCurrentItem(item);
  }


  const [searchTerm, setSearchTerm] = useState('');
  function isEqualIgnoreCase(a, b) {
    const charCodeA = a.charCodeAt(0);
    const charCodeB = b.charCodeAt(0);
    const normA = (charCodeA >= 65 && charCodeA <= 90) ? charCodeA + 32 : charCodeA;
    const normB = (charCodeB >= 65 && charCodeB <= 90) ? charCodeB + 32 : charCodeB;
    return normA === normB;
  }

  let manuallyFilteredData = [];
  for (let i = 0; i < sortedData.length; i++) {
    const item = sortedData[i];
    const subject = item.subject;
    const date = item.date;
    const term = searchTerm;
    let matchFound = false;

    for (let j = 0; j <= subject.length - term.length; j++) {
      let k = 0;
      while (k < term.length && isEqualIgnoreCase(subject[j + k], term[k])) {
        k++;
      }
      if (k === term.length) {
        matchFound = true;
        break;
      }
    }

    for (let j = 0; j <= date.length - term.length; j++) {
      let k = 0;
      while (k < term.length && isEqualIgnoreCase(date[j + k], term[k])) {
        k++;
      }
      if (k === term.length) {
        matchFound = true;
        break;
      }
    }

    if (matchFound || term === '') {
      manuallyFilteredData.push(item);
    }
  }

  return (
    <div className='container-fluid m-0 p-0 w-100' style={{ background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)" }}>
      <Logout />
      <div className='d-flex' style={{ height: '92vh' }}>
        <div className='w-25 border-end border-secondary border-4 pt-3 px-3'>
          <h1 className='text-center fw-bold border-bottom border-secondary border-3 pb-3'>
            Past Meetings
          </h1>
          <input
            type='text'
            className='form-control mb-3 fs-5'
            placeholder='Search by subject or date...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {manuallyFilteredData.length > 0 ? (
            manuallyFilteredData.map((item, index) => (
              <div key={index} className='border rounded-4 border-success border-4 m-2'>
                <button
                  className='btn btn-warning w-100 rounded-4'
                  onClick={() => handleInfo(item)}
                >
                  <div>
                    <p
                      className='fs-3 text-center text-danger'
                      style={{
                        textDecoration: 'underline',
                        textDecorationThickness: '3px',
                      }}
                    >
                      {item.subject}
                    </p>
                    <div className='px-3 d-flex justify-content-between'>
                      <p className='fs-4'>{item.date}</p>
                      <p className='fs-4'>{item.day}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))
          ) : (
            <p className='text-center text-muted mt-4'>No meetings found</p>
          )}
        </div>
        <div className='w-75 pt-5 mb-5 d-flex flex-column'>
          {currentItem !== null && (
            <div className='w-75 align-items-center justify-content-center p-5 bg-secondary-subtle mt-5 rounded-5 mx-auto'>
              <div className='d-flex justify-content-between w-100 px-2'>
                <p className='fs-3'>
                  <span className='fw-bold'>Date :</span> {currentItem.date}
                </p>
                <p className='fs-3'>
                  <span className='fw-bold'>Day : </span>
                  {currentItem.day}
                </p>
              </div>
              <h1
                className='text-center fs-1 fw-bold mb-5 text-success'
                style={{ textDecoration: 'underline', textDecorationThickness: '5px' }}
              >
                {currentItem.subject}
              </h1>
              <p className='fs-3 mt-3 ms-5 ps-5'>
                <span className='fw-bold'>Presentees : </span>
                {currentItem.participants}
              </p>
            </div>
          )}
          {/* <div className='d-flex justify-content-center align-items-center my-auto'>
            <div className='p-5 m-5 bg-secondary-subtle w-75 rounded-5 d-flex flex-column align-items-center'>
              <p className='fs-3 text-center mt-5'>
                Want to create a Room, Click button below
              </p>
              <button className='btn btn-success fs-4 rounded-3 mb-5'>
                Create a room
              </button>
            </div>
          </div> */}

            <Login></Login>


        </div>
      </div>

    </div>
  )
}

export default AdminHome