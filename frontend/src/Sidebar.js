import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span role="img" aria-label="book" className="sidebar-logo-icon">📚</span>
        <span className="sidebar-logo-text">SmartLibrary</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span role="img" aria-label="discover">🏠</span> Discover
            </Link>
          </li>
          <li className={location.pathname === "/category" ? "active" : ""}>
            <Link to="/category" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span role="img" aria-label="category">📂</span> Category
            </Link>
          </li>
          <li><span role="img" aria-label="library">📖</span> My Library</li>
          <li className="sidebar-logout"><span role="img" aria-label="logout">🚪</span> Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
