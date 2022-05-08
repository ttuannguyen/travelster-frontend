import React, {useState} from 'react';

const Form = ({addActivity}) => {

  const url = 'http://localhost:3001/data';
  
  //const [activity, setActivity] = useState('');
  // const [name, setName] = useState('');
  // const [trip, setTrip] = useState('');
  // const [location, setLocation] = useState('');
  // const [comment, setComment] = useState('');

  //refactor by combing all states into a single state object
  const [formData, setFormData] = useState({
    name:'',
    trip:'',
    date: '',
    location:'',
    comment:'',
    image: '',
    likes: 1
  })


  // const handleName = (e) => {
  //   //console.log(e.target.value)
  //   setName(e.target.value)
  // }
  // const handleTrip = (e) => {
  //   setTrip(e.target.value)
  // }
  // const handleLocation = (e) => {
  //   setLocation(e.target.value)
  // }
  // const handleComment = (e) => {
  //   setComment(e.target.value)
  // }

  //refactor by combing all handlers into a one
  const handleChange = (e) => {
    setFormData(formData => {
      return {...formData, [e.target.name]:e.target.value}
    })
  }

   
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name:'',
      trip:'',
      date:'',
      location:'',
      comment:'',
      image:''
    });

    //reset the form after clicking submit
    // setName('');
    // setTrip('');
    // setLocation('');
    // setComment('');


    // let obj = { 
    //   name,
    //   trip,
    //   location,
    //   comment,
    //   likes: 1
    // }
    //console.log(obj)

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(newActivity => {
      //console.log(newActivity)
      addActivity(newActivity)
    })
  }


  return (
    <div id="form">
      <h2>Add an activity!</h2>
      <form onSubmit={handleSubmit}>
        <label>Activity Name</label><br />
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required /><br />
        <label>Trip</label><br />
        <input type='text' id='trip' name='trip' value={formData.trip} onChange={handleChange} required /><br />
        <label>Date</label><br />
        <input type='text' id='date' name='date' value={formData.date} onChange={handleChange} required /><br />
        <label>Location</label><br />
        <input type='text' id='location' name='location' value={formData.location} onChange={handleChange} required /><br />
        <label>Image</label><br />
        <input type='text' id='image' name='image' value={formData.image} onChange={handleChange} required /><br />
        <label>Comment</label><br />
        <textarea id='comment' name='comment' value={formData.comment} onChange={handleChange} required /><br />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form