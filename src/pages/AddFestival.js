import React, { useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { v4 as uuid } from "uuid";

const EditFestival = ({ festivali,organizatori, firebaseUrl,adminMode }) => {
  const navigate = useNavigate();

  if(!adminMode){
    navigate("/*")
  }

  const { id} = useParams();
  console.log(id)

  const [formData, setFormData] = useState({
    naziv: '',
    tip: '',
    prevoz: '',
    cena: '',
    maxOsoba: '',
    slike: '',
    opis: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [sveSlike, setSveSlike] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "slike") {
      // Split the existing images by comma and create an array
      const existingImages = sveSlike;
      
      // Check if the value is not empty and not already included in the existing images
      if (value && !existingImages.includes(value)) {
        // Add the new image to the array of existing images
        const updatedImages = [...existingImages, value];
        setSveSlike(updatedImages); // Update state
        setFormData({
          ...formData,
          slike: updatedImages
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleDeleteImage = (indexToDelete) => {
    // Split the existing images by comma and create an array
    const existingImages = sveSlike;
    
    // Remove the image at the specified index from the array of existing images
    const updatedImages = existingImages.filter((image, index) => index !== indexToDelete);
    
    // Update state to remove the image from the UI
    setSveSlike(updatedImages); // Update state
    setFormData({
      ...formData,
      slike: updatedImages
    });
  };
  

  const addNewUrlInput = () =>{
    setSveSlike([...sveSlike, '']);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(`${firebaseUrl}/festivali/${id}.json`, {
          method: 'post', // Use PATCH method to update existing data
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to update festival');
        // Optionally, you can handle success here (e.g., show a success message)
      } catch (error) {
        console.error('Error updating festival:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.naziv) {
      errors.naziv = 'Naziv is required';
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
      errors.cena = 'Cena must be a valid number';
    }
    if (!data.maxOsoba) {
      errors.maxOsoba = 'Broj osoba is required';
    } else if (!/^\d+$/.test(data.maxOsoba)) {
      errors.maxOsoba = 'Broj osoba must be a valid integer';
    }
    // Add more validation rules as needed
    return errors;
  };

  return (
    <div className='edit-form-div'>
      <h1>Izmeni Festival</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Ime</h4>
          <input
            required
            name="naziv"
            value={formData.naziv}
            onChange={handleChange}
          />
          {formErrors.naziv && <span className="error">{formErrors.naziv}</span>}
        </div>
        <br />
        <div>
          <h4>Tip</h4>
          <input
            required
            name="tip"
            value={formData.tip}
            onChange={handleChange}
          />
          {formErrors.tip && <span className="error">{formErrors.tip}</span>}
        </div>
        <br />
        <div>
          <h4>Prevoz</h4>
          <input
            required
            name="prevoz"
            value={formData.prevoz}
            onChange={handleChange}
          />
          {formErrors.prevoz && <span className="error">{formErrors.prevoz}</span>}
        </div>
        <br />
        <div>
          <h4>Cena</h4>
          <input
            required
            name="cena"
            value={formData.cena}
            onChange={handleChange}
          />
          {formErrors.cena && <span className="error">{formErrors.cena}</span>}
        </div>
        <br />
        <div>
          <h4>Broj osoba</h4>
          <input
            required
            name="maxOsoba"
            value={formData.maxOsoba}
            onChange={handleChange}
          />
          {formErrors.maxOsoba && <span className="error">{formErrors.maxOsoba}</span>}
        </div>
        <div>
          <h4>Url Slika</h4>
          {sveSlike.map((slika, index) => (
            <div key={index}>
              <input required name="slike" value={slika} onChange={(e) => handleChange(e)} />
              <button
                className="red"
                type="button"
                onClick={() => handleDeleteImage(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addNewUrlInput} className="green">Add</button>
        </div>
        <br />
        <div>
          <h4>Opis</h4>
          <textarea
            required
            name="opis"
            value={formData.opis}
            onChange={handleChange}
          />
          {/* Add validation for opis if needed */}
        </div>
        <br />
        <button type='submit'>Submit Changes</button>
      </form>
    </div>
  );
};

export default EditFestival;
