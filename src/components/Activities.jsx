import React from 'react'
import Activity from './Activity'



const Activities = ({ activities }) => {

  //console.log(activities)
  const allActivities = activities.map(activity => <Activity key={activity.id} />)
  console.log(allActivities)

  return (
    <div>
      All Activities
      {allActivities}
    </div>
  )
}

export default Activities