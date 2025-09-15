import {Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../provider/AuthProvider";

export const RequireAuth = () => {
    const { LoginData} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!LoginData === null) {
            navigate("/Login");
        }
    }, [LoginData, navigate]);

    if (LoginData === null) {
        return null; // vent på navigation
    }

    return <Outlet />;
};