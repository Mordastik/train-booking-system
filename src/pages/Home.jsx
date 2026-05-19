import { useState } from 'react';
import TrainList from '../components/TrainList';
import { trainsData } from '../data/trains';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Логіка фільтрації
  const filteredTrains = trainsData.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.number.toLowerCase().includes(query) ||
      train.route.toLowerCase().includes(query)
    );
  });

  return (
    <div className="home-page">
      <div className="hero-section">
        <h2>Пошук залізничних квитків</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Введіть маршрут (напр. Київ) або номер потяга..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <TrainList trains={filteredTrains} />
    </div>
  );
};

export default Home;