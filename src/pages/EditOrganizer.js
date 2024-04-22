import React from 'react'
import { useParams } from 'react-router-dom'
import "../styles/edit.css"

const EditOrganizer = ({festivali, organizatori}) => {
const {id} = useParams()

const organizator = organizatori.find(organizator => organizator.id === parseInt(id)) 

  return (
    <div className='edit-form-div'>
        <h1>Edit Organizer</h1>
        <form>
            <div>
            <h4>Edit name</h4>
            <input defaultValue={organizator.name} type='text' contentEditable/>
            </div>
            <br/>
            <div>
            <h4>Edit festivals</h4>
            <textarea defaultValue={organizator.festivals} type='text' contentEditable/>
            </div>
            <br/>
            <div>
            <h4>Edit description</h4>
            <textarea defaultValue={organizator.description} contentEditable/>
            </div>
            <br/>
            <button type='submit'>Submit Changes</button>
        </form>
    </div>
  )
}

export default EditOrganizer