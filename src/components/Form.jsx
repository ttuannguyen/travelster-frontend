import React, {useState} from 'react';

const Form = () => {

  const [activity, setActivity] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  const url = 'http://localhost:3000/data';





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