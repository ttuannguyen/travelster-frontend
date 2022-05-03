import React from 'react';
import { Link } from 'react-router-dom';
import Likes from './Likes';


const Activity = ({activity, handleUpdateLikes}) => {


  return (
    <div className="activity-card">
      <img className='image' src={activity.image} alt={activity.name} />
      <Link to={`/activities/${activity.id}`} style={{ textDecoration: 'none' }}>
        <h4 className='activity-name' >{activity.name}</h4>
      </Link>
      <h5>Trip: {activity.trip}</h5>
      <p>Location: {activity.location}</p>
      <Likes activity={activity} handleUpdateLikes={handleUpdateLikes}/>
    </div>
  )
}


export default Activity;