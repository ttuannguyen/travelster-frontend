import React from 'react';
import Activity from './Activity';


const Activities = ({activities, handleUpdateLikes}) => {

  const allActivities = activities.map(activity => <Activity key={activity.id} activity={activity} handleUpdateLikes={handleUpdateLikes} />)
  //console.log(allActivities)

  return (
    <div id="activities-container">
      {allActivities}
    </div>
  )
}

//idea: dynamic routing for each activity


export default Activities