import React, { useState } from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    const[click, setClick] = useState(false);
     
    const handleClick =() =>setClick(!click)


        return (
            <nav className="navbar">
              <div className="nav-container">
                <Link to="/" className="nav-logo" >
                 Charity
                
                </Link>

                <ul className='nav-menu'>
                  <li className='nav-item'>
                  <Link to="/" className="nav-links" >
                 Home
                </Link>
                  </li>
                  <li className='nav-item'>
                  <Link to="/about" className="nav-links" >
                 About Us
                </Link>
                  </li>
                  <li className='nav-item'>
                  <Link to="/contact" className="nav-links" >
                 Contact
                </Link>
                  </li>
                  <li className='nav-item'>
                  <Link  to="/archive" className="nav-links" >
                 Archive
                </Link>
                  </li>
                </ul>
              <div className="nav-icon" onClick={handleClick}>
              <i className={ click ? "fas fa-times":"fas fa-bars"}></i>
              </div>
              </div>
            </nav>
        );
    
}

export default Navbar;