
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}


export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(localStorage.getItem("user-info") || null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    return (
        <AuthContext.Provider value={{authUser, setAuthUser, user, setUser}}>
            {children}
        </AuthContext.Provider>

    );
};