import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Import CSS file for styling

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <NavLink to="/" className="navbar-link" activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/profile" className="navbar-link" activeClassName="active">Profile</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/projects" className="navbar-link" activeClassName="active">Projects</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/stories" className="navbar-link" activeClassName="active">Stories</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
