import React from 'react'
import Likes from './Likes'


const Activity = ({activity, handleUpdateLikes}) => {

  return (
    <div>
      <h2>{activity.name}</h2>
      <h4>Trip: {activity.trip}</h4>
      <h4>Location: {activity.location}</h4>
      <p>Comment: {activity.comment}</p>
      <Likes activity={activity} handleUpdateLikes={handleUpdateLikes}/>
    </div>
  )
}


export default Activity