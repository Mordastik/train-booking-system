const SeatMap = ({ bookedSeats, selectedSeats, onSeatClick }) => {
  const totalSeats = 40; // Стандартний плацкарт/купе
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  return (
    <div className="seat-map-container">
      <h3>Оберіть місця:</h3>
      <div className="seat-grid">
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          let seatClass = 'seat free';
          if (isBooked) seatClass = 'seat booked';
          else if (isSelected) seatClass = 'seat selected';

          return (
            <button
              key={seat}
              disabled={isBooked}
              className={seatClass}
              onClick={() => onSeatClick(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>
      <div className="seat-legend">
        <span className="legend-item"><div className="seat free legend-box"></div> Вільне</span>
        <span className="legend-item"><div className="seat selected legend-box"></div> Обране</span>
        <span className="legend-item"><div className="seat booked legend-box"></div> Зайняте</span>
      </div>
    </div>
  );
};

export default SeatMap;