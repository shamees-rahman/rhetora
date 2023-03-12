import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      
            <a href='/' className='navbar-logo'>
            <img style={{verticalAlign:'middle',paddingRight:10, width:'3rem'}}
              src={require("../assets/Logo-Regular.svg").default}
              className="navbar-logo"
              alt="rhetora Logo"
            />
          rhetora.ai
        </a>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links'>
              Why rhetora.ai
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/useCases' className='nav-links'>
              Use cases
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/pricing' className='nav-links'>
              Pricing
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/resources' className='nav-links'>
              Resources
            </NavLink>
          </li>
          <li className='nav-item hide' >
            <a href='#' className='nav-links' style={{pointerEvents:'none'}}>
              |
            </a>
          </li>     
          <li className='nav-item'>
            <NavLink to='/bookDemo' className='nav-links'>
              Book a demo
            </NavLink>
          </li>     
          <li className='nav-item'>
            <NavLink to='/login' className='nav-links'>
              Login
            </NavLink>
          </li> </ul>
      </div>
    </nav>
  );
}

export default Navbar;
