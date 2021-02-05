import Dream from './Dream';
import dreamStyles from '../styles/Dream.module.css';

const DreamsCollection = ({ dreams, onDelete }) => {
  return (
    <div className={dreamStyles.grid}>
      {dreams.map((dream) => (
        <Dream dream={dream} key={dream.id} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DreamsCollection;
