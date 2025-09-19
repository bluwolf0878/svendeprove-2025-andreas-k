import { NavLink } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

// Navigation bar component
export const Navbar = () => {
  const {LoginData, setLoginData } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('access_Token');
    setLoginData(null);
  };

  return (
    <nav className="p-4 flex items-center justify-between">
        <ul className="flex text-lg font-bold mt-auto space-x-4">
            <li><NavLink to="/"> <img src="/logo.png" alt="" /> </NavLink></li>
            <li><NavLink to="/find-et-lift"> find et lift </NavLink></li>
            <li><NavLink to="/VirkerPage"> sådan Virker det </NavLink></li>
        </ul>

        {!LoginData ? (
          <button onClick={() => setShowLogin(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Log ind
          </button>
        ): (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Log ud
          </button>
        )}

        {showLogin && !LoginData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg relative w-96">
              <LoginForm onSuccess={() => setShowLogin(false)} />
              
              <button onClick={() => setShowLogin(false)}>
                ✕
              </button>
            </div>
          </div>
        )}
    </nav>
  );
}