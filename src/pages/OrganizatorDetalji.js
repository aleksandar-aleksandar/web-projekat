import { useParams } from 'react-router-dom';
import "../styles/organizatordetalji.css"
import { Link } from 'react-router-dom';
import Festival from '../components/Festival';
import { useEffect } from 'react';

const OrganizatorDetalji = ({ organizatori, festivali }) => {


    const { id } = useParams();
    const organizator = organizatori[id];

    useEffect(()=> {
        console.log("useeffect")
    }, []);

    if (!organizator) {
        return <div>Loading...</div>;
    }

    const organizedFestivals = festivali[organizator.festivali];

   

    return (
        <div className='organizator-stranica'>
            <div className='brand-div'>
                <h1>{organizator.naziv}</h1>
                <img src={organizator.logo} alt="Organizator Logo" />
            </div>
            <hr />
            <div className='info-div'>
                <div className='festivals-info'>
                    <h2>Festivali organizatora</h2>
                    <ul>
                    {
                    Object.entries(organizedFestivals).map(([id, festival]) => (<Link to={`/festival/${organizator.festivali}/${id}`}><h4>{festival.naziv}</h4></Link>))}
                    </ul>
                </div>
                <div className='description-info'>
                    <h2>Bitne informacije</h2>

                    <h4><span>Adresa:</span> {organizator.adresa}</h4>
                    <h4><span>Godina osnivanja:</span> {organizator.godinaOsnivanja}</h4>
                    <h4><span>Telefon:</span> {organizator.kontaktTelefon}</h4>
                    <h4><span>Email:</span> {organizator.email}</h4>
                </div>
            </div>
        </div>
    );
};

export default OrganizatorDetalji;
