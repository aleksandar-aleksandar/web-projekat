import React, { useEffect, useState } from 'react';
import Organizator from '../components/Organizator';
import "../styles/home.css";
import { Link } from 'react-router-dom';

const Home = ({firebaseUrl,searchQuery, adminMode }) => {

  const [organizatori, setOrganizatori] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const organizatoriResponse = await fetch(`${firebaseUrl}/organizatoriFestivala.json`);
        if (!organizatoriResponse.ok) throw new Error('Failed to fetch organizers');
        const organizatoriData = await organizatoriResponse.json();
        setOrganizatori(organizatoriData);        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [organizatori]);

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const filteredOrganizatori = Object.fromEntries(
    Object.entries(organizatori).filter(([id, organizator]) =>
      organizator.naziv.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="wrapper">
      <div className="organizatori">
      
        {
          Object.entries(filteredOrganizatori).map(([id, organizator]) => (
            <Link key={id} to={`/organizator/${id}`} className='organizatori-links'>
              <Organizator
                key={id}
                id={id}
                naziv={highlightText(organizator.naziv, searchQuery)}
                adresa = {organizator.adresa}
                godinaOsnivanja = {organizator.godinaOsnivanja}
                logo={organizator.logo}
                kontaktTelefon = {organizator.kontaktTelefon}
                email = {organizator.email}
                festivali={organizator.festivali} 
                adminMode = {adminMode}
                firebaseUrl={firebaseUrl}
              />
            </Link>
          ))
        }
        {adminMode === true ? <Link to="/add-new-organizer">
          <div title='Add new festival organizer' className='add-organizer-div'>
            <div className='plus-div'>+</div>
          </div>
        </Link> : <></>}
        
      </div>

    </div>
  );
};

export default Home;
