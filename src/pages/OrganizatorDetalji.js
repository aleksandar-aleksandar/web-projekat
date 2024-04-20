import { useParams } from 'react-router-dom';
import "../styles/organizatordetalji.css"

const OrganizatorDetalji = ({ organizatori }) => {
    const {id} = useParams()
    const organizator = organizatori.find(organizator => organizator.id === parseInt(id));

    if (!organizator) {
        return <div>Loading...</div>;
    }

    return (
        <div className='organizator-stranica'>
            <div className='brand-div'>
            <h1>{organizator.name}</h1>
            <img src={organizator.image}/>
            </div>
            <hr/>
            <div className='info-div'>
                <div className='festivals-info'>
                <h2>Festivals organized</h2>
                {organizator.festivals.map(festival => <a href = "#"><h4 className='festivals-organized' key = {festival}>{festival}</h4></a>)}
                </div>
               <div className='description-info'>
                <h2>Info</h2>
                <div className='desc-div'><h4>{organizator.description}</h4></div>
               </div>
                
            </div>
        </div>
    );
};

export default OrganizatorDetalji;
