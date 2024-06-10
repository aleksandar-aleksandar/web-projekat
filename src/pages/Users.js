import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserEditCard from '../components/UserEditCard'
import "../styles/usereditcard.css"

const Users = ({korisnici, adminMode}) => {
    const navigate = useNavigate()
    if(!adminMode){
        navigate("/*")
    }
  return (
    <div className='cards-wrapper'>
        {Object.entries(korisnici).map(([id, korisnik])=> <UserEditCard  korisnik={korisnik}/>)}
    </div>
  )
}

export default Users