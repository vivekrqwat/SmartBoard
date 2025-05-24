import React from 'react'
import { toast } from "react-hot-toast";
import { useAuthContext } from "../authContext/AuthContext.jsx";

const useUserSignup = () => {
    const { setAuthUser } = useAuthContext();

    const signup = async (input) => {
        // Validate all fields
        const isValid = validateInput(input);
        if (!isValid){ 
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/auth/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input) 
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                toast.error(data.error || "Signup failed. Please try again.");
                return;
            }

            // Store user and update context
            localStorage.setItem("user-info", "user");
            setAuthUser("user");
            toast.success("Signup successful!");
            console.log(data);

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };
    return { signup };
}

export default useUserSignup

const validateInput = (input) => {
    const { email, fullname, university_rollno, class_rollno, password, confirmPassword } = input;

    if (!email || !fullname || !university_rollno || !class_rollno || !password || !confirmPassword) {
        toast.error("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
    }

    return true;
}