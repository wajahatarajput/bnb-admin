import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

// Create a context to hold authentication state and related functions
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    // Function to handle login
    const login = async (params) => {
        // Logic to perform login
        await axios.post('http://localhost:3000/api/login', params).then((res) => {
            if (res.data.userExist) {
                toast.success('Login Successfully')
                setIsAuthenticated(true);
                navigate("/dashboard");
            } else {
                toast.error('Invalid Credentials')
            }
        })
    };

    // Function to handle logout
    const logout = () => {
        // Logic to perform logout
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
