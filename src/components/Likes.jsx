import React from 'react'

const Likes = ({activity, handleUpdateLikes}) => {


    const handleLikeClick = () => {
        const obj = {likes: activity.likes + 1};
        //console.log(obj)

        fetch(`http://localhost:3001/data/${activity.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(json => {
            handleUpdateLikes()
        })

    }
    
    return (
        <span>
            <button className="like-btn" onClick={handleLikeClick}>Likes</button>
            {activity.likes}
        </span>
    )
}

export default Likes