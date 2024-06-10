import React from 'react'
import "../styles/usereditcard.css"

const UserEditCard = ({korisnik}) => {


  return (
<div className="user-card">
    <div className='attributes'>
    <div className="attribute">
        <label for="username">Username:</label>
        <input type="text" id="username" defaultValue={korisnik.korisnickoIme}/>

    </div>
    <div className="attribute">
        <label for="password">Password:</label>
        <input type="text" id="password" defaultValue={korisnik.lozinka}/>
    </div>
    <div className="attribute">
        <label for="name">Name:</label>
        <input type="text" id="name" defaultValue={korisnik.ime}/>
        
    </div>
    <div className="attribute">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" defaultValue={korisnik.prezime}/>
    </div>

    <div className="attribute">
        <label for="email">Email:</label>
        <input type="text" id="email" defaultValue={korisnik.email}/>
    </div>
    </div>
    <div className='attributes'>
    <div className="attribute">
        <label for="birthdate">Date of Birth:</label>
        <input type="text" id="birthdate" defaultValue={korisnik.datumRodjenja}/>
    </div>
    <div className="attribute">
        <label for="address">Address:</label>
        <input type="text" id="address" defaultValue={korisnik.adresa}/>
    </div>
    <div className="attribute">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" defaultValue={korisnik.telefon}/>
    </div>
    <div className="attribute">
        <label for="occupation">Occupation:</label>
        <input type="text" id="occupation" defaultValue={korisnik.zanimanje}/>
    </div>
    <button className="delete-button red" onclick="deleteUser()">Delete</button>
    </div>

</div>

  )
}

export default UserEditCard