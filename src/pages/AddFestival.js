import React, { useState } from 'react';
import "../styles/edit.css";
import { useParams } from 'react-router-dom';

const AddFestival = ({ festivali, organizatori, firebaseUrl, setFestivali }) => {
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    naziv: '',
    opis: '',
    tip: '',
    prevoz: '',
    cena: '',
    maxOsoba: '',
    slike: ''
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
        const response = await fetch(`${firebaseUrl}/festivali/${id}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to add festival');
        const newFestivalId = await response.json(); // Firebase will return the ID of the newly added festival
        setFestivali((festivali) => ({
          ...festivali,
          [id]: {
            ...festivali[id],
            [newFestivalId.name]: formData, // Add the new festival under the generated ID
          },
        }));
        // Clear form data after successful submission
        setFormData({
          naziv: '',
          opis: '',
          tip: '',
          prevoz: '',
          cena: '',
          maxOsoba: '',
          slike: ''
        });
      } catch (error) {
        console.error('Error adding festival:', error);
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
    if (!data.opis) {
      errors.opis = 'Opis is required';
    }
    if (!data.tip) {
      errors.tip = 'Tip is required';
    }
    if (!data.prevoz) {
      errors.prevoz = 'Prevoz is required';
    }
    if (!data.cena) {
      errors.cena = 'Cena is required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(data.cena)) {
      errors.cena = 'Invalid price format';
    }
    if (!data.maxOsoba) {
      errors.maxOsoba = 'Broj osoba is required';
    } else if (!/^\d+$/.test(data.maxOsoba)) {
      errors.maxOsoba = 'Invalid number format';
    }
    if (!data.slike) {
      errors.slike = 'Slike is required';
    } else if (!Array.isArray(data.slike)) {
      errors.slike = 'Slike must be an array';
    }
    // Add more validation rules as needed
    return errors;
  };

  return (
    <div className='form-div'>
      <h1>Dodaj novi festival</h1>
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
            <h5 className='label'>Opis</h5>
            <input
              required
              type='text'
              name="opis"
              value={formData.opis}
              onChange={handleChange}
            />
            {formErrors.opis && <span className="error">{formErrors.opis}</span>}
          </div>
          <div>
            <h5 className='label'>Tip</h5>
            <input
              required
              name="tip"
              value={formData.tip}
              onChange={handleChange}
            />
            {formErrors.tip && <span className="error">{formErrors.tip}</span>}
          </div>
          <div>
            <h5 className='label'>Prevoz</h5>
            <input
              required
              name="prevoz"
              value={formData.prevoz}
              onChange={handleChange}
            />
            {formErrors.prevoz && <span className="error">{formErrors.prevoz}</span>}
          </div>
          <div>
            <h5 className='label'>Cena</h5>
            <input
              required
              name="cena"
              value={formData.cena}
              onChange={handleChange}
            />
            {formErrors.cena && <span className="error">{formErrors.cena}</span>}
          </div>
          <div>
            <h5 className='label'>Broj osoba</h5>
            <input
              required
              name="maxOsoba"
              value={formData.maxOsoba}
              onChange={handleChange}
            />
            {formErrors.maxOsoba && <span className="error">{formErrors.maxOsoba}</span>}
          </div>
          <div>
            <h5 className='label'>Slike</h5>
            <input
              required
              name="slike"
              value={formData.slike}
              onChange={handleChange}
            />
            {formErrors.slike && <span className="error">{formErrors.slike}</span>}
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFestival;
