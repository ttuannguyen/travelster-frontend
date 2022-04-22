import React from 'react';

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)

  }

  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form