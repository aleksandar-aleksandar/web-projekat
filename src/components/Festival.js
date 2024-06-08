import React from 'react'
import edit from "../imgs/edit.png"
import { Link } from 'react-router-dom';

const Festival = ({ organizerId, id, naziv,opis, slike, tip, prevoz, cena, maxOsoba, organizatori }) => {

  const organizatorIds = Object.entries(organizatori)
  .filter(([id, organizator]) => organizator.festivali === organizerId)
  .map(([id, organizator]) => id);

  const organizatorId = organizatorIds[0]

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <div className='festival-kartica'>
      <Link to={`/edit-festival/${organizerId}/${id}`}><button title="Edit" className='edit-btn'><img src={edit} /></button></Link>
      <div className='img-div'><img title={organizatori[organizatorId].naziv} className="org-slika" src={slike[0]} /></div>
      <h1>{naziv}</h1>
      <h3>{tip}</h3>
      <p>{truncateDescription(opis, 100)}</p>
    </div>
  )
}

export default Festival