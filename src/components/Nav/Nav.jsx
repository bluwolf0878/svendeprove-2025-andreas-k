import { NavLink } from "react-router-dom";

// Navigation bar component
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <ul>
            <li><NavLink to="/"> forside </NavLink></li>
            <li><NavLink to="/login"> login </NavLink></li>
            <li><NavLink to="/Products"> Products </NavLink></li>
        </ul>
    </nav>
  );
}