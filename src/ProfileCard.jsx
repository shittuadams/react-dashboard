import { useState } from 'react';

function ProfileCard({name, bio, image}) {
    const [likes, setLikes] = useState(0);
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>
                Status:{" "}
                {isOnline ? (
                    <span style={{color: "green"}}>Online</span>
                ) : (
                    <span style={{color: "red"}}>Offline</span>    
                )}
            </p>

            <button onClick={() => setIsOnline(!isOnline)}>
                Toggle Status
            </button>

            <p>Likes: {likes}</p>

            <button onClick={()=>setLikes(likes + 1)}>Like 👍</button>
        </div>

    );
}

export default ProfileCard;