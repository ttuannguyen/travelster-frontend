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
      name,
      trip,
      location,
      comment,
      likes: 1
    }
    console.log(obj)

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(newActivity => {
      console.log(newActivity)
      addActivity(newActivity)
    })
  }


  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Activity Name</label><br />
        <input type='text' id='name' name='name' value={name} onChange={handleName} required /><br />
        <label>Trip</label><br />
        <input type='text' id='trip' name='trip' value={trip} onChange={handleTrip} required /><br />
        <label>Location</label><br />
        <input type='text' id='location' name='location' value={location} onChange={handleLocation} required /><br />
        <label>Comment</label><br />
        <textarea id='comment' name='comment' value={comment} onChange={handleComment} required /><br />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form