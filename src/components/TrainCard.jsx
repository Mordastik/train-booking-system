import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <div className="train-header">
        <span className="train-number">{train.number}</span>
        <span className="train-route">{train.route}</span>
      </div>
      
      <div className="train-details">
        <div className="detail-item">
          <strong>Відправлення:</strong>
          <p>{train.departureDate} о {train.departureTime}</p>
        </div>
        <div className="detail-item">
          <strong>Час в дорозі:</strong>
          <p>{train.duration}</p>
        </div>
      </div>
      
      <div className="train-footer">
        {/* Посилання на сторінку бронювання (знадобиться для 10 лаби) */}
        <Link to={`/booking/${train.id}`}>
          <button className="book-btn">Вибрати місця</button>
        </Link>
      </div>
    </div>
  );
};

export default TrainCard;