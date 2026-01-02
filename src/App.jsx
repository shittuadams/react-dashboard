import { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const profile = {
    name: "Adams Shittu",
    bio: "React Developer",
    image: "https://raw.githubusercontent.com/shittuadams/portfolio-image/c8b691e9702316a552a247c306fe04ed1b6693f7/profile-image.jpg"
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
      
      <ProfileCard
        name={profile.name}
        bio={profile.bio}
        image={profile.image}
      />
    </div>
  );
}

export default App
