import { useState } from 'react';

function ProfileCard() {
    const [likes, setLikes] = useState(0);
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="card">
            <img
                src="https://raw.githubusercontent.com/shittuadams/portfolio-image/c8b691e9702316a552a247c306fe04ed1b6693f7/profile-image.jpg"
                alt="Adams Shittu's Profile Image"
            />
            <h2>Adams Shittu</h2>
            <p>React Developer</p>
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