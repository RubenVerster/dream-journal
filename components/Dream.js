import Link from 'next/link';

import Button from './Button';

import { FaTrashAlt, FaBookReader } from 'react-icons/fa';

import dreamStyles from '../styles/Dream.module.css';

const Dream = ({ dream: { dreamTitle, dreamExcerpt, id }, onDelete }) => {
  return (
    <div className={dreamStyles.card}>
      <h3>{dreamTitle} &rarr;</h3>
      <p>{dreamExcerpt}</p>
      <br />
      <span className={dreamStyles.buttons}>
        <Link href="dream/[id]" as={`/dream/${id}`}>
          <Button color="steelblue" text={<FaBookReader />} />
        </Link>
        <Button
          text={<FaTrashAlt />}
          color="red"
          onClick={() => onDelete(id)}
        />
      </span>
    </div>
  );
};

export default Dream;
