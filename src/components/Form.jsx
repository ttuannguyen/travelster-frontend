import React, {useState} from 'react';

const Form = () => {

  const url = 'http://localhost:3000/data';
  const [activity, setActivity] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = { activity: e.target.name.value }

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }





  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' id='name' /><br />
        <label>Trip</label>
        <input type='text' id='trip' /><br />
        <label>Location</label>
        <input type='text' id='location' /><br />
        <label>Comments</label>
        <input type='text' id='comments' /><br />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form