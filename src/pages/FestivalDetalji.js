import React from 'react';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../styles/festivaldetalji.css";

const FestivalDetalji = ({festivali, organizatori, firebaseUrl}) => {
    const {id1, id2} = useParams();
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
                        <div key={index} className='carousel-div'>
                            <img src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <hr />
            <div className='info-div'>
                <div>
                    <h2>Osnovne informacije</h2>
                    <h4><span>Cena:</span> {festival.cena}</h4>
                    <h4><span>Tip:</span> {festival.tip}</h4>
                    <h4><span>Kapacitet:</span> {festival.maxOsoba}</h4>
                    <h4><span>Prevoz:</span> {festival.prevoz}</h4>
                </div>
                <div>
                    <h2>Informacije i istorija festivala</h2>
                    <h4>{festival.opis}</h4>
                </div>
            </div>
        </div>
    );
};

export default FestivalDetalji;
