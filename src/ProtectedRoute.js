import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./providers";
import { Dashboard } from "./components";

// Custom ProtectedRoute component
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)

    if (!isAuthenticated)
        return <Navigate to="/" replace />

    return (
        <>
            <Dashboard>
                {children}
            </Dashboard>
        </>
    )
};

export default ProtectedRoute;
