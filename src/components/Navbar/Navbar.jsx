import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    borderBottom: isActive ? "5px solid #9953c0" : "",
  });
  return (
    <nav className="navbar container">
      <NavLink style={getActiveStyle} className="nav__link" to="/">
        Feed
      </NavLink>

      <NavLink style={getActiveStyle} className="nav__link" to="/about">
        About
      </NavLink>
    </nav>
  );
};
