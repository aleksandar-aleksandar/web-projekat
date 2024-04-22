import React from 'react'
import { Link } from 'react-router-dom'
import Festival from '../components/Festival'
import "../styles/festivals.css"

const Festivals = ({festivali, organizatori}) => {
  return (
    <div className='festivals'>
        <div className='wrapper'>
        {festivali.map(festival => <Link key={festival.id} to={`/festival/${festival.id}`}><Festival organizerId = {festival.organizerId} id = {festival.id} ime = {festival.name} mesec = {festival.month} zanr = {festival.genre} opis = {festival.description} organizatori = {organizatori}/></Link>)}
        <Link to="/add-new-festival">
          <div title="Add A Festival" className='add-festival'>
            <div className='plus-div2'>
              +
            </div>
          </div>
        </Link>
        </div>
    </div>
  )
}

export default Festivals