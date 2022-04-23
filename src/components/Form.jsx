import React, {useState} from 'react';

const Form = () => {

  const url = 'http://localhost:3000/data';
  //const [activity, setActivity] = useState('');
  const [name, setName] = useState('');
  const [trip, setTrip] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = { 
      name: e.target.name.value,
    }

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(json => console.log(json))
    //.then(activity => setActivity(activity))

  }

  const handleName = (e) => {
    console.log(e.target.value)
  }



  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Activity Name</label>
        <input type='text' id='name' name='name' /><br />
        <label>Trip</label>
        <input type='text' id='trip' name='trip' /><br />
        <label>Location</label>
        <input type='text' id='location' name='location' /><br />
        <label>Comment</label>
        <textarea id='comment' name='comment' /><br />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form