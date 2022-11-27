import React from 'react'


const Contact = () => {
  return (
    <div className='main-form'>
      <form action="" className='sub-form'>
      <div className='form-group'>
      <label htmlFor="">Enter your name</label>
        <input type="text" /><br />
        </div>
        <br />
        <div className='form-group'>
        <label htmlFor="">Enter Address</label>
            <input type="text" />
        </div>
        <br />
        <div className='form-group'>
        <label htmlFor="">Enter phone no.</label>
            <input type="number" />
        </div>
      </form>
    </div>
  )
}

export default Contact
