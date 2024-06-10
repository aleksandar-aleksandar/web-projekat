import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/organizator.css";
import edit from "../imgs/edit.png"

const Organizator = ({ id, naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email, festivali, adminMode, firebaseUrl}) => {

  const deleteOrganizer = (id) => {
    fetch(`${firebaseUrl}/organizatoriFestivala/${id}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // Add any additional headers if needed, such as authorization headers
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(`Organizer with ID ${id} deleted successfully`);
        // Optionally, perform any other actions after successful deletion
    })
    .catch(error => {
        console.error('There was a problem with the delete request:', error);
    });

    fetch(`${firebaseUrl}/festivali/${festivali}.json`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
          // Add any additional headers if needed, such as authorization headers
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      console.log(`Festivals with ID ${id} deleted successfully`);
      // Optionally, perform any other actions after successful deletion
  })
  .catch(error => {
      console.error('There was a problem with the delete request:', error);
  });
};

  return (
    <div className="organizator-kartica">
      
      {adminMode ? <Link to={`/edit-organizator/${id}`}><button title='Edit' className='edit-btn'><img src={edit} /></button></Link> : <></>}
      <img className="organizator-img" src={logo} alt={naziv} />
      <h1>{naziv}</h1>
      <p>{adresa}</p>
      <p>{kontaktTelefon}</p>
      <p>{godinaOsnivanja}</p>
      <p>{email}</p>

      {adminMode ? <Link to={`/`}><button onClick={() => deleteOrganizer(id)} title='Delete' className='red'>Delete</button></Link> : <></>}
    </div>
  );
};

export default Organizator;
