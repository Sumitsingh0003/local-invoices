import { React } from 'react'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
    <header className='main_header'>
        <div className="container">
          <Navbar expand="lg">
              <div className='main_logo'>
                <Link to="/">Navbar</Link>
              </div>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <div className='nav_link'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/contact">Contact Us</Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
}

export default Header