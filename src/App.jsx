import CrystalBall from './components/CrystalBall';
import './App.css';

const createStars = () => {
  const stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        animationDelay: `${Math.random() * 2}s`
      }
    });
  }
  return stars;
};

const App = () => {
  return (
    <div className="app-container">
      {createStars().map(star => (
    <div 
      key={star.id} 
      className="star" 
      style={star.style}
    />
  ))}
      <header className="celestial-header">
        <h1 className="title glitch-text">
          AstroAI
          <span className="crystal-icon" role="img" aria-label="crystal ball">🔮</span>
        </h1>
        <p className="incantation-text">By the moon's soft glow, your fate I'll show...</p>
      </header>
      
      <div className="orb-container">
        <CrystalBall />
      </div>
    <div className="constellation-overlay"></div>
    </div>
  );
};

export default App;
