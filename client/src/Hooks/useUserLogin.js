import React from 'react'
import { toast } from "react-hot-toast";
import { useAuthContext } from "../authContext/AuthContext.jsx";

const useUserLogin = () => {
    const { setAuthUser } = useAuthContext();

    const login = async (input) => {
        const isValid = validateInput(input);
        if (!isValid) {
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/auth/user/login", {
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
            localStorage.setItem("user-info", "user");
            setAuthUser("user");
            toast.success("Login successful!");
            console.log(data);

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };

    return { login };
}

export default useUserLogin


const validateInput = (input) => {
    const { university_rollno, password } = input;

    if (!university_rollno || !password) {
        toast.error("Please fill in all fields.");
        return false;
    }

    return true;
}