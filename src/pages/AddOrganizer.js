import React, { useState } from 'react';
import { useParams, Link, useNavigate, json } from 'react-router-dom';
import "../styles/edit.css";
import { v4 as uuidv4 } from 'uuid';

const EditOrganizer = ({ festivali, organizatori, firebaseUrl, setFestivali, setOrganizatori, adminMode}) => {
  const navigate = useNavigate()
  if(!adminMode){
    navigate("/*")
  }

  const [formData, setFormData] = useState({
    naziv: '',
    adresa: '',
    godinaOsnivanja: '',
    kontaktTelefon: '',
    email: '',
    logo: '',
    festivali: uuidv4()
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch organizers and use updated formData
      const responseOrg = await fetch(`${firebaseUrl}/organizatoriFestivala.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Use updated formData
      });
      if (!responseOrg.ok) throw new Error('Failed to update organizer');

      const responseDataOrg = await responseOrg.json(); // Parse response JSON
      const generatedIdOrg = responseDataOrg.name; // Firebase-assigned ID

      console.log('Firebase assigned ID for organizer:', generatedIdOrg);
    } catch (error) {
      console.error('Error updating data:', error);
    }
};



  /*const organizovaniFestivali = Object.entries(festivali).filter(
    ([groupId, groupFestivals]) => groupId === "fsjwihsogfiasfhagiashf"
  );
  const organizovaniFestival = organizovaniFestivali.length > 0 ? organizovaniFestivali[0][1] : {};*/


  const deleteFestival = async (organizatorFestivala, festivalId) => {
    try {
      const response = await fetch(`${firebaseUrl}/festivali/${organizatorFestivala}/${festivalId}.json`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete festival');

      setFestivali((prevFestivali) => {
        const updatedFestivali = { ...prevFestivali };
        if (updatedFestivali[organizatorFestivala]) {
          delete updatedFestivali[organizatorFestivala][festivalId];
          if (Object.keys(updatedFestivali[organizatorFestivala]).length === 0) {
            delete updatedFestivali[organizatorFestivala];
          }
        }
        return updatedFestivali;
      });
    } catch (error) {
      console.error('Error deleting festival:', error);
    }
  };

  return (
    <div className="edit-form-div">
      <h1>Izmene organizatora</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Ime organizacije</h4>
          <input
            required
            name="naziv"
            value={formData.naziv}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <h4>Adresa</h4>
          <input
            required
            name="adresa"
            value={formData.adresa}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <h4>Godina osnovanja</h4>
          <input
            required
            name="godinaOsnivanja"
            value={formData.godinaOsnivanja}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <h4>Kontakt telefon</h4>
          <input
            required
            name="kontaktTelefon"
            value={formData.kontaktTelefon}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <h4>Email</h4>
          <input
            required
            name="email"
            value={formData.email}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Logo url</h4>
          <input
            required
            name="logo"
            value={formData.logo}
            type="text"
            onChange={handleChange}
          />
        </div>
        <br />
      
        <br />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
};

export default EditOrganizer;
