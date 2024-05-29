import React from 'react';
import Organizator from '../components/Organizator';
import "../styles/home.css";
import { Link } from 'react-router-dom';

const Home = ({ organizatori, festivali, searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const filteredOrganizatori = organizatori.filter(organizator =>
    organizator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="organizatori">
        {filteredOrganizatori.map(organizator => (
          <Link key={organizator.id} to={`/organizator/${organizator.id}`} className='organizatori-links'>
            <Organizator
              key={organizator.id}
              id={organizator.id}
              ime={highlightText(organizator.name, searchQuery)}
              festivali={organizator.festivals}
              opis={organizator.description}
              slika={organizator.image}
            />
          </Link>
        ))}
        <Link to="/add-new-organizer">
          <div title='Add new festival organizer' className='add-organizer-div'>
            <div className='plus-div'>+</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
