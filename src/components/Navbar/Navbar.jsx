import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    borderBottom: isActive ? "2px solid var(--primary-color)" : "",
    color: isActive ? "var(--primary-color)" : "var(--text-main)",
  });

  return (
    <motion.nav 
      className="navbar glass-panel"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__container container">
        <NavLink style={getActiveStyle} className="nav__link" to="/">
          Feed
        </NavLink>
        <NavLink style={getActiveStyle} className="nav__link" to="/about">
          About
        </NavLink>
      </div>
    </motion.nav>
  );
};
