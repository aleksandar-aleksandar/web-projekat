import React from 'react'

const AddOrganizer = () => {
  return (
    <div className='form-div'>
        <h1>Add New Organization</h1>
        <div className='wrapper'>
        <form>
            <div>
            <h5 className='label'>Name of the organization</h5>
            <input/>
            </div>
            <div>
            <h5 className='label'>Description</h5>
            <input type='text-box'/>
            </div>
            <div>
            <h5 className='label'>Image</h5>
            <input type="file"/>
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddOrganizer