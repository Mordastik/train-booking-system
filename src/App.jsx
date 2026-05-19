import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Обов'язкові стилі для повідомлень
import Home from './pages/Home';
import Booking from './pages/Booking'; // Імпортуємо нову сторінку

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
            <Route path="/booking/:trainId" element={<Booking />} />
          </Routes>
        </main>
      </div>
      {/* Додаємо контейнер для повідомлень */}
      <ToastContainer /> 
    </Router>
  );
}

export default App;