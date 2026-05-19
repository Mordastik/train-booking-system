const WagonSelector = ({ wagons, selectedWagon, onSelect }) => {
  return (
    <div className="wagon-selector">
      <h3>Оберіть вагон:</h3>
      <div className="wagon-buttons">
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            className={`wagon-btn ${selectedWagon === wagon.id ? 'active' : ''}`}
            onClick={() => onSelect(wagon.id)}
          >
            Вагон {wagon.number} ({wagon.type})
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;