import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar1.css"
import logo from "../imgs/logo.png"
import ToggleButton from './ToggleButton';
const Navbar = ({ setSearchQuery, setAdminMode}) => {
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

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
    
      <div className="navbar">
        <div className='toggle-button-container'>
        <h4>Admin Mod</h4>
        <ToggleButton setAdminMode={setAdminMode}/>
        </div>
        <div className='navbar-logo'>
          <a href="/"><img src={logo} alt="Logo" /></a>
          
        </div>
        <div className='search-div'>
          <form>
            <input onChange={handleInputChange} placeholder='Search...'></input>
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
            <button className='red' onClick={toggleShowLogin}>X</button>
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
            <h5 className='label'>Korisnicko ime</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Ime</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Prezime</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Datum rodjenja</h5>
            <input type="date" required></input>
          </div>
          <div>
            <h5 className='label'>Adresa</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Telefon</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Zanimanje</h5>
            <input required></input>
          </div>
          <div>
            <h5 className='label'>Lozinka</h5>
            <input required type='password'></input>
          </div>
          <div>
            <button type='submit' >Register</button>
            <button className="red" onClick={toggleShowRegister}>X</button>
          </div>
        </form>
      </div>)}

    </>
  );
};

export default Navbar;
