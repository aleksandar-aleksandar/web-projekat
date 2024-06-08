import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/organizator.css";
import edit from "../imgs/edit.png"

const Organizator = ({ id, naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email, festivali}) => {

  return (
    <div className="organizator-kartica">
      <img className="organizator-img" src={logo} alt={naziv} />
      <h1>{naziv}</h1>
      <p>{adresa}</p>
      <p>{kontaktTelefon}</p>
      <p>{godinaOsnivanja}</p>
      <p>{email}</p>
      <h4>{festivali}</h4>
      <Link to={`/edit-organizator/${id}`}><button title='Edit' className='edit-btn'><img src={edit} /></button></Link>
    </div>
  );
};

export default Organizator;
