import React, {useState} from 'react';

const Form = ({addActivity}) => {

  const url = 'http://localhost:3000/data';
  //const [activity, setActivity] = useState('');
  const [name, setName] = useState('');
  const [trip, setTrip] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');

  const handleName = (e) => {
    //console.log(e.target.value)
    setName(e.target.value)
  }

  const handleTrip = (e) => {
    setTrip(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }
   
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


  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Activity Name</label>
        <input type='text' id='name' name='name' value={name} onChange={handleName} /><br />
        <label>Trip</label>
        <input type='text' id='trip' name='trip' value={trip} onChange={handleTrip} /><br />
        <label>Location</label>
        <input type='text' id='location' name='location' value={location} onChange={handleLocation} /><br />
        <label>Comment</label>
        <textarea id='comment' name='comment' value={comment} onChange={handleComment} /><br />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form