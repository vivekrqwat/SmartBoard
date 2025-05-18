import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useUserSignup from '../../Hooks/useUserSignup';

const Usersignup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
       university_rollno :"",
        class_rollno:"",
        password: "",
        confirmPassword: ""
    });

    

    const {signup} = useUserSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(input);
    }

  return (
     <div className='border rounded-4 py-5 px-5 my-5 mx-5 w-100 ' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
            <h3 className='d-flex justify-content-center fw-bold fs-2'>Member Sign Up</h3>
                <form action="" onSubmit={handleSubmit}>
            <div className="mb-3 mt-4 d-flex justify-content-between w-100">

                <div className='w-50'>
                    <label className="form-label fs-5 fw-bold">Full Name</label>
                    <input type="text" name='fullname' className="form-control" value={input.fullname} onChange={(e) => setInput({ ...input, fullname: e.target.value })} />
                </div>
                <div className='w-50 ms-5'>
                    <label className="form-label fs-5 fw-bold">Email</label>
                    <input type="email" 
                    name='email'
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                    className="form-control" />
                </div>
            </div>
            <div className="mb-3 mt-3 d-flex justify-content-between w-100">
                <div className='w-50'>
                    <label className="form-label fs-5 fw-bold">University Roll No.</label>
                    <input type="text" className="form-control" value={input.university_rollno} onChange={(e) => setInput({ ...input, university_rollno: e.target.value })} />
                </div>
                <div className='w-50 ms-5'>
                    <label className="form-label fs-5 fw-bold">Class Roll No.</label>
                    <input type="text" className="form-control" value={input.class_rollno} onChange={(e) => setInput({ ...input, class_rollno: e.target.value })} />
                </div>
            </div>
            <div className="mb-3 mt-3 d-flex justify-content-between w-100">
                <div className='w-50'>
                    <label className="form-label fs-5 fw-bold">Password</label>
                    <input type="password" className="form-control" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <div className='w-50 ms-5'>
                    <label className="form-label fs-5 fw-bold">Confirm Password</label>
                    <input type="password" className="form-control" value={input.confirmPassword} onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-dark border border-4 rounded-5 border-dark mt-4 mb-2 w-50 fs-5">Sign Up</button>
            </div>
                </form>


            <Link className="btn btn-link w-100 text-dark fw-bold" to="/user-login">Already have an account? <span className='text-success'>&nbsp;Login</span> </Link>
            <br />
            <Link className="btn btn-link w-100 text-dark fw-bold" to="/admin-signup">Are you an Admin? <span className='text-success'>&nbsp;Login</span> </Link>
        </div>
  )
}

export default Usersignup