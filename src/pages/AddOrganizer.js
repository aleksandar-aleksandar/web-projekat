import React, { useState } from 'react';

const AddOrganizer = ({ firebaseUrl }) => {
  const [formData, setFormData] = useState({
    naziv: '',
    adresa: '',
    godinaOsnivanja: '',
    logo: '',
    kontaktTelefon: '',
    email: '',
    festivali: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear the corresponding error message when the input changes
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(`${firebaseUrl}/organizatori.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to add organizer');
        }
        // Optionally, handle success (e.g., show a success message)
        console.log('Organizer added successfully');
        // Clear form fields after successful submission
        setFormData({
          naziv: '',
          adresa: '',
          godinaOsnivanja: '',
          logo: '',
          kontaktTelefon: '',
          email: '',
          festivali: '',
        });
      } catch (error) {
        console.error('Error adding organizer:', error);
      }
    } else {
      // Update form errors state with validation errors
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.naziv) {
      errors.naziv = 'Naziv is required';
    }
    if (!data.adresa) {
      errors.adresa = 'Adresa is required';
    }
    if (!data.godinaOsnivanja) {
      errors.godinaOsnivanja = 'Godina osnivanja is required';
    } else if (!/^\d{4}$/.test(data.godinaOsnivanja)) {
      errors.godinaOsnivanja = 'Invalid year format';
    }
    if (!data.logo) {
      errors.logo = 'Logo is required';
    }
    if (!data.kontaktTelefon) {
      errors.kontaktTelefon = 'Kontakt telefon is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.festivali) {
      errors.festivali = 'Festivali is required';
    }
    // Add more validation rules as needed
    return errors;
  };

  return (
    <div className='form-div'>
      <h1>Add New Organization</h1>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <div>
            <h5 className='label'>Naziv</h5>
            <input
              required
              name="naziv"
              value={formData.naziv}
              onChange={handleChange}
            />
            {formErrors.naziv && <span className="error">{formErrors.naziv}</span>}
          </div>
          <div>
            <h5 className='label'>Adresa</h5>
            <input
              required
              name="adresa"
              value={formData.adresa}
              onChange={handleChange}
            />
            {formErrors.adresa && <span className="error">{formErrors.adresa}</span>}
          </div>
          <div>
            <h5 className='label'>Godina Osnivanja</h5>
            <input
              required
              name="godinaOsnivanja"
              value={formData.godinaOsnivanja}
              onChange={handleChange}
            />
            {formErrors.godinaOsnivanja && <span className="error">{formErrors.godinaOsnivanja}</span>}
          </div>
          <div>
            <h5 className='label'>Logo</h5>
            <input
              required
              name="logo"
              value={formData.logo}
              onChange={handleChange}
            />
            {formErrors.logo && <span className="error">{formErrors.logo}</span>}
          </div>
          <div>
            <h5 className='label'>Kontakt Telefon</h5>
            <input
              required
              name="kontaktTelefon"
              value={formData.kontaktTelefon}
              onChange={handleChange}
            />
            {formErrors.kontaktTelefon && <span className="error">{formErrors.kontaktTelefon}</span>}
          </div>
          <div>
            <h5 className='label'>Email</h5>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div>
            <h5 className='label'>Festivali</h5>
            <input
              required
              name="festivali"
              value={formData.festivali}
              onChange={handleChange}
            />
            {formErrors.festivali && <span className="error">{formErrors.festivali}</span>}
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrganizer;
