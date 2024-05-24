import React from 'react'
import edit from "../imgs/edit.png"
import { Link } from 'react-router-dom';

const Festival = ({ organizerId, id, ime, mesec, zanr, opis, organizatori }) => {

  const organizator = organizatori.find(organizator => organizator.id === organizerId);


  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <div className='festival-kartica'>
      <Link to={`/edit-festival/${id}`}><button title="Edit" className='edit-btn'><img src={edit} /></button></Link>
      <div className='img-div'><img title={organizator.name} className="org-slika" src={organizator.image} /></div>
      <h1>{ime}</h1>
      <h3>{zanr}</h3>
      <p>{truncateDescription(opis, 100)}</p>

    </div>
  )
}

export default Festival