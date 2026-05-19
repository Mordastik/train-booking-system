import { useState } from 'react';

const BookingForm = ({ selectedSeats, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert('Будь ласка, оберіть хоча б одне місце!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Дані пасажира</h3>
      
      <div className="form-group">
        <label>ПІБ *</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          placeholder="Іванов Іван Іванович"
        />
      </div>

      <div className="form-group">
        <label>Телефон *</label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
          placeholder="+380..."
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          placeholder="email@example.com"
        />
      </div>

      <button type="submit" className="book-btn submit-btn" disabled={selectedSeats.length === 0}>
        Забронювати {selectedSeats.length > 0 && `(${selectedSeats.length} місць)`}
      </button>
    </form>
  );
};

export default BookingForm;