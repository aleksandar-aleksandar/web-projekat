import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "../styles/festivaldetalji.css"

const FestivalDetalji = ({festivali, organizatori}) => {
    
    const {id} = useParams()
    const festival = festivali.find(festival => festival.id === parseInt(id));
    const organizator = organizatori.find(organizator => organizator.id === parseInt(festival.organizerId));

    return (
        <div className='festival-stranica'>
            <div className= "brand-div">
            <h1>{festival.name} by <Link to = {`/organizator/${organizator.id}`}>{organizator.name}</Link></h1>
            <img  src = {organizator.image}/>
            </div>
            <hr/>
            <div className='info-div'>
                <div>
                <h2>Every year in {festival.month}</h2>
                <h2>Genre: {festival.genre}</h2>
                </div>
                <div>
                    <h2>Information and history</h2>
                <h4>{festival.description}</h4> 
                </div>
            </div>
        </div>
    )
}

export default FestivalDetalji