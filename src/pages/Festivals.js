import React from 'react';
import { Link } from 'react-router-dom';
import Festival from '../components/Festival';
import "../styles/festivals.css";

const Festivals = ({ festivali, organizatori, searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const allFestivals = [];

  for (const categoryKey of Object.keys(festivali)) {
    const festivalsInCategory = festivali[categoryKey];
    for (const festivalId of Object.keys(festivalsInCategory)) {
      const festivalDetails = festivalsInCategory[festivalId];
      allFestivals.push({ organizerId: categoryKey, id: festivalId, ...festivalDetails });
    }
  }

  console.log(allFestivals);

  const filterredFestivali = allFestivals.filter(festival => festival.naziv.toLowerCase().includes(searchQuery.toLowerCase()) || festival.tip.toLowerCase().includes(searchQuery.toLowerCase())|| festival.opis.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <div className='festivals'>
      <div className='wrapper'>
        {Object.entries(filterredFestivali).map(([id, festival]) => (
          <div>
          <Link key={id} to={`/festival/${festival.organizerId}/${festival.id}`}>
            {console.log(festival.organizerId + " " + id)}
            <Festival
              organizerId={festival.organizerId}
              id={festival.id}
              naziv={highlightText(festival.naziv, searchQuery)}
              opis = {festival.opis}
              slike = {festival.slike}
              tip = {highlightText(festival.tip, searchQuery)}
              prevoz = {festival.prevoz}
              cena = {festival.cena}
              maxOsoba = {festival.maxOsoba}
              organizatori={organizatori}
            />
          </Link>
          </div>
        ))}
        <div>
        <Link to="/add-new-festival">
          <div title="Add A Festival" className='add-festival'>
            <div className='plus-div2'>
              +
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Festivals;
