import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Admin = () =>{
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const handleToggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleUserLogin = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const LoginForm = (
        <div className='border rounded-4 p-5 m-5 w-75 ' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
            <h3 className='d-flex justify-content-center fw-bold fs-2'>Admin Login</h3>
            <div className="mb-3 mt-4">
                <label className="form-label fw-bold fs-5">Employee ID</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold fs-5">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-dark border border-4 rounded-5 border-dark mt-4 mb-2 w-50 fs-5">Login</button>
            </div>
            <button className="btn btn-link w-100 text-dark fw-bold" onClick={handleToggleForm}>Don't have an account? Sign Up</button>
        </div>
    );

    const SignupForm = (
        <div className='border rounded-4 py-5 px-5 my-5 mx-5 w-100 ' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
            <h3 className='d-flex justify-content-center fw-bold fs-2' style={{textDecoration:"underline",textUnderlineOffset:"10px",textDecorationThickness:"5px"}}>Admin Sign Up</h3>
            <div className="mb-3 mt-5 w-100">
                
                    <label className="form-label fs-5 fw-bold">Email</label>
                    <input type="email" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-between w-100">
                <div className='w-50'>
                    <label className="form-label fs-5 fw-bold">Full Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className='w-50 ms-5'>
                    <label className="form-label fs-5 fw-bold">Employee ID</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="mb-3 mt-3 d-flex justify-content-between w-100">
                <div className='w-50'>
                    <label className="form-label fs-5 fw-bold">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className='w-50 ms-5'>
                    <label className="form-label fs-5 fw-bold">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
            </div>


            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-dark border border-4 rounded-5 border-dark mt-4 mb-2 w-50 fs-5">Sign Up</button>
            </div>
            <button className="btn btn-link w-100 text-dark fw-bold" style={{textDecoration:"none"}} onClick={handleToggleForm}>Already have an account? <span className='text-success' style={{textDecoration:"underline",textUnderlineOffset:"5px",textDecorationColor:"black",textDecorationThickness:"2px"}}>Login</span> </button>
        </div>
    );

    return (
        <div className='container-fluid p-0 vh-100 overflow-hidden' style={{
            background: "linear-gradient(150deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)"
        }}>
            <div className='container-fluid px-4' >
                <nav className='d-flex justify-content-between align-items-center'>
                    <p class="text-start fw-bold fs-1 py-2 text-warning">Delta SmartBoard</p>
                    <div>
                        <button type="button" class="btn btn-outline-dark btn-sm py-1 px-3 fs-6 fw-semibold border border-3 border-dark rounded-4 text-white" onClick={handleUserLogin}>User Login</button>
                    </div>
                </nav>
            </div>
            <div className='container-fluid'>
                <div className='w-100 d-flex align-items-center' style={{ height: "85vh" }}>
                    <div className='row w-100'>
                        <div className='col d-flex justify-content-center w-50'>
                            {isSignup ? SignupForm : LoginForm}
                        </div>
                        <div className='col d-flex align-items-center' style={{ color: "black" }}>
                            <div className='d-flex p-5 mx-5 my-5 flex-column justify-content-center border rounded-4' style={{ backgroundColor: "rgba(230, 219, 163, 0.58)" }}>
                                <div className='d-flex flex-column'>
                                    <h1 className='text-center fw-bold'>
                                        Welcome to Delta's SmartBoard
                                    </h1>
                                    <h4 className='text-center'>
                                        ( Advance Collaborative and Anti Proxy System )
                                    </h4>
                                </div>
                                <div className='mt-5'>
                                    <p className='fs-5 lh-base' style={{ textAlign: "justify" }}> <strong> Delta SmartBoard</strong> is a cutting-edge collaborative platform designed to enhance online education. It offers an advanced digital drawing system that enables seamless interaction between educators and students within a virtual classroom. In addition to facilitating real-time teaching and idea exchange, Delta SmartBoard features an integrated attendance management system that ensures accuracy and prevents proxy attendance. This all-in-one solution streamlines virtual learning while promoting engagement, accountability, and collaboration.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Admin;