import React from 'react'

const Likes = ({activity}) => {


    const handleLikeClick = () => {
        const obj = {likes: activity.likes + 1};
        //console.log(obj)
    }
    
    return (
        <span>
            <button className="like-btn" onClick={handleLikeClick}>Likes</button>
            {activity.likes}
        </span>
    )
}

export default Likes