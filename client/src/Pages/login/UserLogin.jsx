import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [input, setInput] = useState({
    universityRollNo: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div className='border rounded-4 p-5 m-5 w-75' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
      <h3 className='d-flex justify-content-center fw-bold fs-2'>Member Login</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label className="form-label fw-bold fs-5">University Roll No.</label>
          <input
            type="text"
            className="form-control"
            value={input.universityRollNo}
            onChange={(e) => setInput({ ...input, universityRollNo: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold fs-5">Password</label>
          <input
            type="password"
            className="form-control"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>

        <div className='d-flex justify-content-center'>
          <button
            type="submit"
            className="btn btn-outline-dark border border-4 rounded-5 border-dark mt-4 mb-2 w-50 fs-5"
          >
            Login
          </button>
        </div>
      </form>

      <Link className="btn btn-link w-100 text-dark fw-bold" to="/user-signup">
        Don't have an account? <span className='text-success'>Sign Up</span>
      </Link>
      <br />
      <Link className="btn btn-link w-100 text-dark fw-bold" to="/admin-login">
        Are you an Admin? <span className='text-success'>&nbsp;Login</span>
      </Link>
    </div>
  );
};

export default UserLogin;
