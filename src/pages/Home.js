import React from 'react'
import Organizator from '../components/Organizator'
import "../styles/home.css"
import { Link } from 'react-router-dom';


const Home = ({organizatori}) => {

  return (
    <div className = "wrapper">
    <div class="organizatori">
        {organizatori.map(organizator => <Link key={organizator.id} to={`/organizator/${organizator.id}`} className='organizatori-links'><Organizator key= {organizator.id} ime = {organizator.name} festivali = {organizator.festivals} opis = {organizator.description} slika = {organizator.image}/></Link>)}
        <Link to="/add-new-organizer"><div title='Add new festival organizer' className='add-organizer-div'><div className='plus-div'>+</div></div></Link>
    </div>
    </div>
  )
}

export default Home