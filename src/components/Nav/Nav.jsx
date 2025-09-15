import { NavLink } from "react-router-dom";

// Navigation bar component
export const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
        <ul className="flex text-lg font-bold mt-auto space-x-4">
            <li><NavLink to="/"> <img src="/logo.png" alt="" /> </NavLink></li>
            <li><NavLink to="/login"> login </NavLink></li>
            <li><NavLink to="/Products"> Products </NavLink></li>
        </ul>
        <button className="bg-blue-500">Login</button>
    </nav>
  );
}