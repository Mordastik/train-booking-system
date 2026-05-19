import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Укрзалізниця 2.0 🚆</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Заглушка для майбутньої 10 лаби */}
            <Route path="/booking/:trainId" element={<div style={{padding: '20px'}}>Сторінка бронювання (Лаба 10)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;