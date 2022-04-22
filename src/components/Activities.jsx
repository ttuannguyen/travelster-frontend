import React from 'react'
import Activity from './Activity'



const Activities = ({ activities }) => {

  const allActivities = activities.map(activity => <Activity key={activity.id} activity={activity} />)
  //console.log(allActivities)

  return (
    <div>
      <h2>All Activities</h2>
      {allActivities}
    </div>
  )
}

export default Activities