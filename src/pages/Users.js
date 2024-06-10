import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserEditCard from '../components/UserEditCard'
import "../styles/usereditcard.css"

const Users = ({korisnici, adminMode, firebaseUrl}) => {
    const navigate = useNavigate()
    if(!adminMode){
        navigate("/*")
    }
  return (
    <div className='cards-wrapper'>
        {Object.entries(korisnici).map(([id, korisnik])=> <UserEditCard id={id} korisnik={korisnik} firebaseUrl={firebaseUrl}/>)}
    </div>
  )
}

export default Users