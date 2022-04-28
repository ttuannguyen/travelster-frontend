import React from 'react'
import Likes from './Likes'


const Activity = ({activity, handleUpdateLikes}) => {

  return (
    <div className="activity-card">
      <h4>{activity.name}</h4>
      <h5>Trip: {activity.trip}</h5>
      <p>Location: {activity.location}</p>
      <p>Comment: {activity.comment}</p>
      <Likes activity={activity} handleUpdateLikes={handleUpdateLikes}/>
    </div>
  )
}


export default Activity