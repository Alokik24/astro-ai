// Corrected CrystalBall.jsx
import { useState } from "react";
import "./CrystalBall.css";

const CrystalBall = () => {
  const [isHovered, setIsHovered] = useState(false);
  const message = isHovered 
    ? "The Inner Eye can be a burden, you know..." 
    : "🔮 Hover to see your fate...";

  return (
    <div className="orb-container">
      <div 
        className="crystal-ball"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="inner-glow">
          <p className={isHovered ? "prophecy-text" : "prompt-text"}>
            {message}
          </p>
        </div>
      </div>
      <div className="orb-shadow" />
    </div>
  );
};

export default CrystalBall;