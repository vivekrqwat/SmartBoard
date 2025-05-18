import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAdminLogin from '../../Hooks/useAdminLogin';

const AdminLogin = () => {
  const [input, setInput] = useState({
    employee_id: "",
    password: ""
  });

  const {login} = useAdminLogin();

  const handleSubmit =async (e) => {
    e.preventDefault();
    await login(input);
  };

  return (
    <div className='border rounded-4 p-5 m-5 w-75' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
      <h3 className='d-flex justify-content-center fw-bold fs-2'>Admin Login</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-4">
          <label className="form-label fw-bold fs-5">Employee ID</label>
          <input
            type="text"
            className="form-control"
            value={input.employee_id}
            onChange={(e) => setInput({ ...input, employee_id: e.target.value })}
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

      <Link className="btn btn-link w-100 text-dark fw-bold" to="/admin-signup">
        Don't have an account? <span className='text-success'>Sign Up</span>
      </Link>
      <br />
      <Link className="btn btn-link w-100 text-dark fw-bold" to="/user-login">
        Are you a User? <span className='text-success'>&nbsp;Login</span>
      </Link>
    </div>
  );
};

export default AdminLogin;
