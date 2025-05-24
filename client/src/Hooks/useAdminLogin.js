import React from 'react'
import {toast} from "react-hot-toast"
import { useAuthContext } from '../authContext/AuthContext';


const useAdminLogin = () => {

    const {setAuthUser} = useAuthContext();

   
    const login = async (input) => {
        const isValid = validateInput(input);
        if (!isValid) {
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/auth/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                toast.error(data.error || "Login failed. Please try again.");
                return;
            }

            // Store user and update context
            localStorage.setItem("user-info", "admin");
            setAuthUser("admin");
            toast.success("Login successful!");
            console.log(data);

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };

    return { login };
}

export default useAdminLogin

 const validateInput = (input) => {
        const { employee_id, password } = input;

        if (!employee_id || !password) {
            toast.error("Please fill in all fields.");
            return false;
        }

        return true;
    }