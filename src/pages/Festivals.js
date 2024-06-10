import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Festival from '../components/Festival';
import "../styles/festivals.css";

const Festivals = ({ firebaseUrl,searchQuery , adminMode}) => {

  const [organizatori, setOrganizatori] = useState({});
  const [festivali, setFestivali] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {

        const organizatoriResponse = await fetch(`${firebaseUrl}/organizatoriFestivala.json`);
        if (!organizatoriResponse.ok) throw new Error('Failed to fetch organizers');
        const organizatoriData = await organizatoriResponse.json();
        setOrganizatori(organizatoriData);  
        
        const festivalsResponse = await fetch(`${firebaseUrl}/festivali.json`);
        if (!festivalsResponse.ok) throw new Error('Failed to fetch festivals');
        const festivalsData = await festivalsResponse.json();
        setFestivali(festivalsData);

              
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [firebaseUrl]);

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

  const filterredFestivali = allFestivals.filter(festival => festival.naziv.toLowerCase().includes(searchQuery.toLowerCase()) || festival.tip.toLowerCase().includes(searchQuery.toLowerCase())|| festival.opis.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <div className='festivals'>
      <div className='wrapper'>
        {Object.entries(filterredFestivali).map(([id, festival]) => (
          <div>
          <Link key={id} to={`/festival/${festival.organizerId}/${festival.id}`}>
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
              adminMode = {adminMode}
            />
          </Link>
          </div>
        ))}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Festivals;
