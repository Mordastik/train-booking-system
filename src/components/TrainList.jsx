import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  if (trains.length === 0) {
    return <div className="empty-state">Потягів за вашим запитом не знайдено.</div>;
  }

  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;