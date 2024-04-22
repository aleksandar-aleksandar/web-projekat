import React from 'react'
import { useParams } from 'react-router-dom'

const EditFestival = ({festivali, organizatori}) => {

  const {id} = useParams()
  const festival = festivali.find(festival => festival.id === parseInt(id))
  return (
    <div className='edit-form-div'>
        <h1>Edit Organizer</h1>
        <form>
            <div>
            <h4>Edit name</h4>
            <input defaultValue={festival.name} type='text' contentEditable/>
            </div>
            <br/>
            <div>
            <h4>Edit organizator</h4>
            <input defaultValue={festival.festivals} type='text' contentEditable/>
            </div>
            <br/>
            <div>
            <h4>Edit description</h4>
            <textarea defaultValue={festival.description} contentEditable/>
            </div>
            <br/>
            <button type='submit'>Submit Changes</button>
        </form>
    </div>
  )
}

export default EditFestival