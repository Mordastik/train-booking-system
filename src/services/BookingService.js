export const BookingService = {
  // Отримати вже зайняті місця для конкретного потяга і вагона
  getBookedSeats: (trainId, wagonId) => {
    const data = localStorage.getItem(`bookings_${trainId}_${wagonId}`);
    return data ? JSON.parse(data) : [];
  },

  // Зберегти нове бронювання
  saveBooking: (trainId, wagonId, newSeats, userInfo) => {
    // В реальному житті ми б відправляли userInfo на бекенд, 
    // тут просто зберігаємо місця як зайняті
    const existingSeats = BookingService.getBookedSeats(trainId, wagonId);
    const updatedSeats = [...existingSeats, ...newSeats];
    localStorage.setItem(`bookings_${trainId}_${wagonId}`, JSON.stringify(updatedSeats));
  }
};