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

  const filteredFestivali = festivali.filter(festival =>
    festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    festival.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='festivals'>
      <div className='wrapper'>
        {filteredFestivali.map(festival => (
          <Link key={festival.id} to={`/festival/${festival.id}`}>
            <Festival
              organizerId={festival.organizerId}
              id={festival.id}
              ime={highlightText(festival.name, searchQuery)}
              mesec={festival.month}
              zanr={highlightText(festival.genre, searchQuery)}
              opis={festival.description}
              organizatori={organizatori}
            />
          </Link>
        ))}
        <Link to="/add-new-festival">
          <div title="Add A Festival" className='add-festival'>
            <div className='plus-div2'>
              +
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Festivals;
