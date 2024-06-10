import React from 'react';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import "../styles/festivaldetalji.css";

const FestivalDetalji = ({festivals, organizators, firebaseUrl}) => {

    const { id1, id2 } = useParams();

    const [organizatori, setOrganizatori] = useState({})
    const [festivali, setFestivali] = useState({})


    
    const getFestivali = fetch(`${firebaseUrl}/festivali.json`)
    .then(response => setFestivali(response.json))

    getFestivali()

    console.log(festivali)
    console.log(organizatori)
    

    const festival = festivali[id1][id2];
    
    const organizatorIds = Object.entries(organizatori)
        .filter(([id, organizator]) => organizator.festivali === id1)
        .map(([id, organizator]) => id);

    const organizatorId = organizatorIds[0];

    return (
        <div className='festival-stranica'>
            <div className="brand-div">
                <h1>{festival.naziv} by <Link to={`/organizator/${organizatorId}`}>{organizatori[organizatorId].naziv}</Link></h1>
                <Carousel>
                    {festival.slike.map((imageUrl, index) => (
                        <div key={index}>
                            <img src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <hr />
            <div className='info-div'>
                <div>
                    <h2>Every year in {festival.cena}</h2>
                    <h2>Genre: {festival.tip}</h2>
                </div>
                <div>
                    <h2>Information and history</h2>
                    <h4>{festival.opis}</h4>
                </div>
            </div>
        </div>
    );
};

export default FestivalDetalji;
