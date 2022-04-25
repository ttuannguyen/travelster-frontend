import React from 'react'


const Activity = ({activity}) => {
  return (
    <div>
      <h2>{activity.name}</h2>
      <h4>Trip: {activity.trip}</h4>
      <h4>Location: {activity.location}</h4>
      <p>Comment: {activity.comment}</p>
    </div>
  )
}


export default Activity