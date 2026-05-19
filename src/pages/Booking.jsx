import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { trainsData } from '../data/trains';
import { BookingService } from '../services/BookingService';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

// Мок-дані вагонів для потяга
const mockWagons = [
  { id: 1, number: '01', type: 'Купе' },
  { id: 2, number: '02', type: 'Плацкарт' },
  { id: 3, number: '03', type: 'Люкс' }
];

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trainsData.find(t => t.id === parseInt(trainId));

  const [selectedWagon, setSelectedWagon] = useState(mockWagons[0].id);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Завантажуємо зайняті місця при зміні вагона
  useEffect(() => {
    if (train) {
      const seats = BookingService.getBookedSeats(train.id, selectedWagon);
      setBookedSeats(seats);
      setSelectedSeats([]); // Очищаємо вибрані місця при зміні вагона
    }
  }, [train, selectedWagon]);

  if (!train) return <div className="home-page">Потяг не знайдено</div>;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(s => s !== seatNumber) 
        : [...prev, seatNumber]
    );
  };

  const handleBookingSubmit = (userInfo) => {
    // Зберігаємо бронювання
    BookingService.saveBooking(train.id, selectedWagon, selectedSeats, userInfo);
    
    // Показуємо успішне повідомлення
    toast.success(`Успішно! Заброньовано місця: ${selectedSeats.join(', ')}`, {
      position: "top-right",
      autoClose: 3000,
    });

    // Оновлюємо UI
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    
    // Повертаємо на головну через 3 секунди
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <div className="home-page booking-page">
      <h2>Бронювання квитків</h2>
      <div className="train-info-card">
        <h3>Потяг {train.number}: {train.route}</h3>
        <p>Відправлення: {train.departureDate} о {train.departureTime}</p>
      </div>

      <div className="booking-layout">
        <div className="left-panel">
          <WagonSelector 
            wagons={mockWagons} 
            selectedWagon={selectedWagon} 
            onSelect={setSelectedWagon} 
          />
          <SeatMap 
            bookedSeats={bookedSeats} 
            selectedSeats={selectedSeats} 
            onSeatClick={handleSeatClick} 
          />
        </div>

        <div className="right-panel">
          <BookingForm 
            selectedSeats={selectedSeats} 
            onSubmit={handleBookingSubmit} 
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;