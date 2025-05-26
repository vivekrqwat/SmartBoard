import { useState } from "react";
import AdminLogin from "./login/AdminLogin";
import { useNavigate } from "react-router-dom";


const Admin = () =>{
    
    const navigate = useNavigate();
    const handleUserLogin = (e) =>{
        e.preventDefault();
        navigate("/user-login");
    }
    
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
                            <AdminLogin/>
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