import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to manage the dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown and prevent closing the mobile menu
  const handleDropdownToggle = (event) => {
    event.stopPropagation(); // Prevents the menu from closing
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center coffee-background sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Lee Family Footprints</h1>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/our-story" activeclassname="active">Our Story</NavLink></li>
            <li><NavLink to="/grand-parents" activeclassname="active">Grand Parents</NavLink></li>
            <li><NavLink to="/jin-family" activeclassname="active">Jin</NavLink></li>
            <li><NavLink to="/lee-family" activeclassname="active">Lee</NavLink></li>
            <li><NavLink to="https://songfamily.netlify.app/" activeclassname="active" target="_blank">Song</NavLink></li>  
            <li><NavLink to="/kim-family" activeclassname="active">Kim</NavLink></li>        
            {/* Dropdown menu */}
            {/* <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <a href="#" onClick={handleDropdownToggle}>
                <span>Journey</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <li><NavLink to="/america" activeclassname="active">America</NavLink></li>
                <li><NavLink to="/california" activeclassname="active">California</NavLink></li>
                <li><NavLink to="/korea" activeclassname="active">Korea</NavLink></li>
                <li><NavLink to="/mexico" activeclassname="active">Mexico</NavLink></li>
              </ul>
            </li> */}
          </ul>

          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links d-none d-sm-block">
          <a href="" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="" className="instagram"><i className="bi bi-instagram"></i></a>
        </div>

      </div>
    </header>
  );
}

export default Header;
