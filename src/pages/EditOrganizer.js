import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "../styles/edit.css";
import { v4 as uuidv4 } from 'uuid';

const EditOrganizer = ({ festivali, organizatori, firebaseUrl, setFestivali, setOrganizatori , adminMode}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const organizator = organizatori[id];

  if(!adminMode){
    navigate("/*")
  }

  const [formData, setFormData] = useState({
    naziv: organizator.naziv,
    adresa: organizator.adresa,
    godinaOsnivanja: organizator.godinaOsnivanja,
    kontaktTelefon: organizator.kontaktTelefon,
    email: organizator.email,
    logo: organizator.logo,
    festivali: organizator.festivali
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
      const response = await fetch(`${firebaseUrl}/organizatoriFestivala/${id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to update organizer');

      setOrganizatori((prevOrganizatori) => ({
        ...prevOrganizatori,
        [id]: formData,
      }));

      navigate(`/organizator/${id}`); // Redirect to the organizers list or any other page
    } catch (error) {
      console.error('Error updating organizer:', error);
    }
  };

  const organizovaniFestivali = Object.entries(festivali).filter(
    ([groupId, groupFestivals]) => groupId === organizator.festivali
  );

  const organizovaniFestival = organizovaniFestivali.length > 0 ? organizovaniFestivali[0][1] : {};

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
        <br />
        <div>
          <h4>Festivali</h4>
          {Object.entries(organizovaniFestival).map(([festivalId, festival]) => (
            <div className="festival-crud" key={festivalId}>
              <h4>{festival.naziv}</h4>
              <div>
                <Link to={`/edit-festival/${organizator.festivali}/${festivalId}`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteFestival(organizator.festivali, festivalId);
                  }}
                  className="red"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <Link to = {`/add-new-festival/${organizator.festivali}`}><button className="green">Add Festival</button></Link>
        </div>
        <br />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
};

export default EditOrganizer;
