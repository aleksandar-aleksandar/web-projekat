import React from 'react'

const AddFestival = () => {
  return (
    <div className='form-div'>
      <h1>Add New Festival</h1>
      <div className='wrapper'>
        <form>
          <div>
            <h5 className='label'>Name of the organization</h5>
            <input required />
          </div>
          <div>
            <h5 className='label'>Description</h5>
            <input required type='text-box' />
          </div>
          <div>
            <h5 className='label'>Organization</h5>
            <input required />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddFestival