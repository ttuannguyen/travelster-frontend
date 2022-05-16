import React from 'react';
import Activity from './Activity';


const Activities = ({activities, handleUpdateLikes}) => {

  const allActivities = activities.map(activity => <Activity key={activity.id} activity={activity} handleUpdateLikes={handleUpdateLikes} />)

  return (
    <div id="activities-container">
      {allActivities}
    </div>
  )
}



export default Activities