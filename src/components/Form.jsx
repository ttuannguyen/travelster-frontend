import React, {useState} from 'react';

const Form = ({addActivity}) => {

  const url = 'http://localhost:3001/data';

  const [formData, setFormData] = useState({
    name:'',
    trip:'',
    date: '',
    location:'',
    comment:'',
    image: '',
    likes: 1
  })
  //controlled component




  const handleChange = (e) => {
    setFormData(formData => {
      return {...formData, [e.target.name]:e.target.value}
    })
  }

   
  const handleSubmit = (e) => {
    e.preventDefault();
    //reset form
    setFormData({
      name:'',
      trip:'',
      date:'',
      location:'',
      comment:'',
      image:''
    });



    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(newActivity => {
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