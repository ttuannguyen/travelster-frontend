import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {

  const [activity, setActivity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/data/${id}`)
      .then(res => res.json())
      .then(activity => setActivity(activity))
  }, [id]);

  const { name, trip, location, comment, image } = activity;

  return (
    <div className='activity-detail'>
      <img className='image' src={image} alt={name} />
      <h4 className='activity-name' >{name}</h4>
      <h5>Trip: {trip}</h5>
      <p>Location: {location}</p>
      <p>Comment: {comment}</p>
  </div>
  )
}

export default ActivityDetail;