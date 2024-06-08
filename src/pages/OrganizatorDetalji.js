import { useParams } from 'react-router-dom';
import "../styles/organizatordetalji.css"
import { Link } from 'react-router-dom';
import Festival from '../components/Festival';

const OrganizatorDetalji = ({ organizatori, festivali }) => {
    const { id } = useParams();
    const organizator = organizatori[id];

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
                    <h4>{organizator.adresa}</h4>
                    <h4>{organizator.godinaOsnivanja}</h4>
                    <h4>{organizator.kontaktTelefon}</h4>
                    <h4>{organizator.email}</h4>
                    <div className='desc-div'><h4></h4></div>
                </div>
            </div>
        </div>
    );
};

export default OrganizatorDetalji;
