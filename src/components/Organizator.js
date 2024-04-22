import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/organizator.css";
import edit from "../imgs/edit.png"

const Organizator = ({ id, ime, festivali, opis, slika }) => {

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const limitedFestivals = festivali.slice(0, 3);

  return (
    <div className="organizator-kartica">
      <img className="organizator-img" src={slika} alt={ime} />
      <h1>{ime}</h1>
      <h3>{limitedFestivals.join(', ') + ", ..."}</h3>
      <p>{truncateDescription(opis, 150)}</p> 
      <Link to={`/edit-organizator/${id}`}><button title='Edit' className='edit-btn'><img src={edit}/></button></Link>
    </div>
  );
};

export default Organizator;
