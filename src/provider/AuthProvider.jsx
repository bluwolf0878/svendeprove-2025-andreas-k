import { createContext, useContext, useEffect, useState } from "react";

// laver Context som kan deles mellem komponenter
export const AuthContext = createContext();

// provider-komponent der kan give auth-data vider
export const AuthProvider = ({children}) => {
    const [LoginData, setLoginData] = useState(null);

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem("access_token");
            if (raw) {
                setLoginData(JSON.parse(raw));

            }
        } catch (error) {
            console.error("kunne ikke parse access_Token fra sessionStorage", error);
            setLoginData(null);
        }
    }, [children]);

    return (
        <AuthContext.Provider value={{ LoginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
