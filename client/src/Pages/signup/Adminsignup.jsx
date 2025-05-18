import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import useAdminSignup from '../../Hooks/useAdminSignup';

const Adminsignup = () => {

  const { signup } = useAdminSignup();

  const [input, setInput] = useState({
    email: "",
    fullname: "",
    employee_id: "",
    password: "",
    confirmPassword: ""
  });

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(input);

  };

  return (
    <div className='border rounded-4 py-5 px-5 my-5 mx-5 w-100' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
      <h3
        className='d-flex justify-content-center fw-bold fs-2'
        style={{
          textDecoration: "underline",
          textUnderlineOffset: "10px",
          textDecorationThickness: "5px"
        }}
      >
        Admin Sign Up
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5 w-100">
          <label className="form-label fs-5 fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>

        <div className="mb-3 d-flex justify-content-between w-100">
          <div className='w-50'>
            <label className="form-label fs-5 fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
            />
          </div>
          <div className='w-50 ms-5'>
            <label className="form-label fs-5 fw-bold">Employee ID</label>
            <input
              type="text"
              className="form-control"
              value={input.employee_id}
              onChange={(e) => setInput({ ...input, employee_id: e.target.value })}
            />
          </div>
        </div>

        <div className="mb-3 mt-3 d-flex justify-content-between w-100">
          <div className='w-50'>
            <label className="form-label fs-5 fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className='w-50 ms-5'>
            <label className="form-label fs-5 fw-bold">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={input.confirmPassword}
              onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            />
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-outline-dark border border-4 rounded-5 border-dark mt-4 mb-2 w-50 fs-5">Sign Up</button>
        </div>
      </form>

      <Link className="btn btn-link w-100 text-dark fw-bold" style={{ textDecoration: "none" }} to="/admin-login">
        Already have an account? <span className='text-success' style={{ textDecoration: "underline", textUnderlineOffset: "5px", textDecorationColor: "black", textDecorationThickness: "2px" }}>Login</span>
      </Link>
    </div>
  );
};

export default Adminsignup;
