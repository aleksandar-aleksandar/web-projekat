import React from 'react';
import "../styles/organizator.css";
import edit from "../imgs/edit.png"

const Organizator = ({ ime, festivali, opis, slika }) => {
  // Function to truncate description to a certain length
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  // Function to limit the number of displayed festivals
  const limitedFestivals = festivali.slice(0, 3); // Limiting to 3 festivals, change as needed

  return (
    <div className="organizator-kartica">
      <img className="organizator-img" src={slika} alt={ime} />
      <h1>{ime}</h1>
      <h3>{limitedFestivals.join(', ') + ", ..."}</h3>
      <p>{truncateDescription(opis, 150)}</p> {/* Truncate description to 150 characters, change as needed */}
      <button title='Edit' className='edit-btn'><img src={edit}/></button>
    </div>
  );
};

export default Organizator;
