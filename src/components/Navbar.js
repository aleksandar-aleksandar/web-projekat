import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import logo from "../imgs/logo.png"
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
    setShowRegister(false)
  }

  const toggleShowRegister = () => {
    setShowRegister(!showRegister)
    setShowLogin(false)
  }

  return (
    <>
      <div className="navbar">
        <div className='navbar-logo'>
          <a href="/"><img src={logo} alt="Logo" /></a>
        </div>
        <div className='search-div'>
          <form>
            <input placeholder='Search...'></input>
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className="navbar-buttons">
          <Link to="/">Organizers</Link>

          <Link to="/festivals">Festivals</Link>
          <button onClick={toggleShowLogin}>Login</button>
          <button onClick={toggleShowRegister}>Register</button>
        </div>
      </div>

      {showLogin && (<div className='login-div'>
        <form className='login-form'>
          <div>
            <h5 className='label'>Username</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Password</h5>
            <input required type='password'></input>
          </div>
          <div>
            <button type='submit' >Login</button>
          </div>
        </form>
      </div>)}

      {showRegister && (<div className='register-div'>
        <form className='register-form'>
          <div>
            <h5 className='label'>Email</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Username</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Password</h5>
            <input required type='password'></input>
          </div>
          <div>
            <button type='submit' >Register</button>
          </div>
        </form>
      </div>)}

    </>
  );
};

export default Navbar;
