import React, { useState } from 'react';
import "../styles/usereditcard.css";
import { deleteUser } from 'firebase/auth';

const UserEditCard = ({ id, korisnik, firebaseUrl }) => {
    const [editedKorisnik, setEditedKorisnik] = useState(korisnik);

    const handleEdit = (attributeName, newValue) => {
        setEditedKorisnik(prevState => ({
            ...prevState,
            [attributeName]: newValue
        }));
    };

    const saveChanges = () => {
        fetch(`${firebaseUrl}/korisnici/${id}.json`, {
            method: 'PATCH', // Use PATCH method to update specific attributes
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed, such as authorization headers
            },
            body: JSON.stringify(editedKorisnik) // Send the updated user object in the request body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(`User with ID ${id} updated successfully`);
            // Optionally, perform any other actions after successful update
        })
        .catch(error => {
            console.error('There was a problem with the update request:', error);
        });
    };

    return (
        <div className="user-card">
            {/* Render input fields for each attribute */}
            <div className='attributes'>
                <div className="attribute">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={editedKorisnik.korisnickoIme} onChange={e => handleEdit('korisnickoIme', e.target.value)} />
                </div>
                <div className="attribute">
    <label htmlFor="password">Password:</label>
    <input type="text" id="password" value={editedKorisnik.lozinka} onChange={e => handleEdit('lozinka', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={editedKorisnik.ime} onChange={e => handleEdit('ime', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="surname">Surname:</label>
    <input type="text" id="surname" value={editedKorisnik.prezime} onChange={e => handleEdit('prezime', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" value={editedKorisnik.email} onChange={e => handleEdit('email', e.target.value)} />
</div>
</div>
<div className='attributes'>
<div className="attribute">
    <label htmlFor="birthdate">Date of Birth:</label>
    <input type="text" id="birthdate" value={editedKorisnik.datumRodjenja} onChange={e => handleEdit('datumRodjenja', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="address">Address:</label>
    <input type="text" id="address" value={editedKorisnik.adresa} onChange={e => handleEdit('adresa', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="phone">Phone:</label>
    <input type="text" id="phone" value={editedKorisnik.telefon} onChange={e => handleEdit('telefon', e.target.value)} />
</div>
<div className="attribute">
    <label htmlFor="occupation">Occupation:</label>
    <input type="text" id="occupation" value={editedKorisnik.zanimanje} onChange={e => handleEdit('zanimanje', e.target.value)} />
</div>

                <button className="save-button" onClick={saveChanges}>Save Changes</button>
                <button className='red' onClick={deleteUser}>Delete</button>
            </div>
        </div>
    );
};

export default UserEditCard;
