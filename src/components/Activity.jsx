import React from 'react'

const Activity = ({activity}) => {
  return (
    <div>
      <h3>Name: {activity.name}</h3>
      <h4>Trip: {activity.trip}</h4>
      <p>Likes: {activity.likes}</p>
    </div>
  )
}

export default Activity