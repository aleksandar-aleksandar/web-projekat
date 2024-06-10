import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar1.css"
import logo from "../imgs/logo.png"
import ToggleButton from './ToggleButton';
const Navbar = ({ setSearchQuery, setAdminMode, adminMode, firebaseUrl}) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")

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

  const [formData, setFormData] = useState({
    email: '',
    korisnickoIme: '',
    ime: '',
    prezime: '',
    datumRodjenja: '',
    adresa: '',
    telefon: '',
    zanimanje: '',
    lozinka: ''
});

const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};

  if (!formData.email) {
      newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
  }

  if (!formData.korisnickoIme) {
      newErrors.korisnickoIme = 'Username is required';
  } else if (formData.korisnickoIme.length < 2) {
      newErrors.korisnickoIme = 'Username must be at least 2 characters';
  }

  if (!formData.ime) {
      newErrors.ime = 'First name is required';
  } else if (formData.ime.length < 2) {
      newErrors.ime = 'First name must be at least 2 characters';
  }

  if (!formData.prezime) {
      newErrors.prezime = 'Last name is required';
  } else if (formData.prezime.length < 2) {
      newErrors.prezime = 'Last name must be at least 2 characters';
  }

  if (!formData.datumRodjenja) {
      newErrors.datumRodjenja = 'Date of birth is required';
  }

  if (!formData.adresa) {
      newErrors.adresa = 'Address is required';
  } else if (formData.adresa.length < 2) {
      newErrors.adresa = 'Address must be at least 2 characters';
  }

  if (!formData.telefon) {
      newErrors.telefon = 'Phone number is required';
  } else if (!/^\d{2,}$/.test(formData.telefon)) {
      newErrors.telefon = 'Phone number is invalid';
  } else if (formData.telefon.length < 2) {
      newErrors.telefon = 'Phone number must be at least 2 characters';
  }

  if (!formData.zanimanje) {
      newErrors.zanimanje = 'Occupation is required';
  } else if (formData.zanimanje.length < 2) {
      newErrors.zanimanje = 'Occupation must be at least 2 characters';
  }

  if (!formData.lozinka) {
      newErrors.lozinka = 'Password is required';
  } else if (formData.lozinka.length < 6) {
      newErrors.lozinka = 'Password must be at least 6 characters';
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
        return;
    }

    fetch(`${firebaseUrl}/korisnici.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Optionally, handle successful response
        console.log('Form data submitted successfully');
    })
    .catch(error => {
        console.error('There was a problem with the form submission:', error);
    });
};

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
};


const [loginData, setLoginData] = useState({
  username: '',
  password: ''
});

const [loginErrors, setLoginErrors] = useState({});

const validateLogin = () => {
  const newErrors = {};

  if (!loginData.username) {
      newErrors.username = 'Username is required';
  }

  if (!loginData.password) {
      newErrors.password = 'Password is required';
  }

  setLoginErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleLoginChange = (event) => {
  const { name, value } = event.target;
  setLoginData(prevData => ({
      ...prevData,
      [name]: value
  }));
};

const handleLoginSubmit = (event) => {
  event.preventDefault();

  if (!validateLogin()) {
      return;
  }

  fetch(`${firebaseUrl}/korisnici.json`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(data => {
      // Assuming data is an object where each key is a user ID and value is the user data
      const users = Object.values(data);
      const user = users.find(u => u.korisnickoIme === loginData.username && u.lozinka === loginData.password);

      if (user) {
          console.log('Login successful:', user);
          setLoggedIn(true)
          setUser(user.korisnickoIme)
          // Handle successful login, such as storing authentication tokens, updating UI, etc.
      } else {
          console.error('Invalid username or password');
          // Optionally set an error state to display a message to the user
          setLoginErrors({ general: 'Invalid username or password' });
      }
  })
  .catch(error => {
      console.error('There was a problem with the login request:', error);
  });
};

const handleLogOut = () => {
  setLoggedIn(false)
  setUser("")
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
          {adminMode ? <Link to="/users">Users</Link>:<></>}
          <Link to="/">Organizers</Link>
          <Link to="/festivals">Festivals</Link>
          {loggedIn ? <button onClick={handleLogOut}>Log out</button>:<></>}
          {loggedIn ? <h4>{user}</h4> :<button onClick={toggleShowLogin}>Login</button>}
          {!loggedIn ? <button onClick={toggleShowRegister}>Register</button>:<></>}
        </div>
      </div>

      {showLogin && (
                <div className='login-div'>
                    <form className='login-form' onSubmit={handleLoginSubmit}>
                        <div>
                            <h5 className='label'>Username</h5>
                            <input
                                type="text"
                                name="username"
                                value={loginData.username}
                                onChange={handleLoginChange}
                                required
                            />
                            {loginErrors.username && <p className="error">{loginErrors.username}</p>}
                        </div>
                        <div>
                            <h5 className='label'>Password</h5>
                            <input
                                type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                            />
                            {loginErrors.password && <p className="error">{loginErrors.password}</p>}
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                            <button className='red' onClick={toggleShowLogin}>X</button>
                        </div>
                    </form>
                </div>
            )}

      {showRegister && (<div className='register-div'>
            <form className='register-form' onSubmit={handleSubmit}>
                <div>
                    <h5 className='label'>Email</h5>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <h5 className='label'>Korisnicko ime</h5>
                    <input
                        type="text"
                        name="korisnickoIme"
                        value={formData.korisnickoIme}
                        onChange={handleChange}
                        required
                    />
                    {errors.korisnickoIme && <p className="error">{errors.korisnickoIme}</p>}
                </div>
                <div>
                    <h5 className='label'>Ime</h5>
                    <input
                        type="text"
                        name="ime"
                        value={formData.ime}
                        onChange={handleChange}
                        required
                    />
                    {errors.ime && <p className="error">{errors.ime}</p>}
                </div>
                <div>
                    <h5 className='label'>Prezime</h5>
                    <input
                        type="text"
                        name="prezime"
                        value={formData.prezime}
                        onChange={handleChange}
                        required
                    />
                    {errors.prezime && <p className="error">{errors.prezime}</p>}
                </div>
                <div>
                    <h5 className='label'>Datum rodjenja</h5>
                    <input
                        type="date"
                        name="datumRodjenja"
                        value={formData.datumRodjenja}
                        onChange={handleChange}
                        required
                    />
                    {errors.datumRodjenja && <p className="error">{errors.datumRodjenja}</p>}
                </div>
                <div>
                    <h5 className='label'>Adresa</h5>
                    <input
                        type="text"
                        name="adresa"
                        value={formData.adresa}
                        onChange={handleChange}
                        required
                    />
                    {errors.adresa && <p className="error">{errors.adresa}</p>}
                </div>
                <div>
                    <h5 className='label'>Telefon</h5>
                    <input
                        type="text"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        required
                    />
                    {errors.telefon && <p className="error">{errors.telefon}</p>}
                </div>
                <div>
                    <h5 className='label'>Zanimanje</h5>
                    <input
                        type="text"
                        name="zanimanje"
                        value={formData.zanimanje}
                        onChange={handleChange}
                        required
                    />
                    {errors.zanimanje && <p className="error">{errors.zanimanje}</p>}
                </div>
                <div>
                    <h5 className='label'>Lozinka</h5>
                    <input
                        type="password"
                        name="lozinka"
                        value={formData.lozinka}
                        onChange={handleChange}
                        required
                    />
                    {errors.lozinka && <p className="error">{errors.lozinka}</p>}
                </div>
                <div>
                    <button type='submit' onClick={handleSubmit}>Register</button>
                    <button className='red' onClick={toggleShowRegister}>x</button>
                </div>
            </form>
        </div>)}

    </>
  );
};

export default Navbar;
