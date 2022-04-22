import React, {useState} from 'react';

const Form = () => {

  const url = 'http://localhost:3000/data';
  const [activity, setActivity] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({activity: e.target.name.value}),
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }





  return (
    <div>
      <h2>Add an activity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' id='name' />
        <input type='submit'/>
      </form>
    </div>
    

  )
}

export default Form