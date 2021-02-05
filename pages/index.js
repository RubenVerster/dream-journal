import { server } from '../config';
import { useState } from 'react';

import DreamsCollection from '../components/DreamsCollection';
import Header from '../components/Header';
import AddDream from '../components/AddDream';

export default function Home({ dreams }) {
  const [showAddDream, setShowAddDream] = useState(false);
  const [dreamsCollection, setDreamsCollection] = useState(dreams);

  const addDream = async (dream) => {
    const res = await fetch(`http://localhost:5000/dreams`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dream),
    });

    const data = await res.json();
    console.log(dream);
    setDreamsCollection([...dreams, data]);
  };

  const deleteDream = async (id) => {
    await fetch(`http://localhost:5000/dreams/${id}`, {
      method: 'DELETE',
    });
    setDreamsCollection(dreams.filter((dream) => dream.id !== id));
  };

  return (
    <div>
      <Header
        title="My Dream Journal"
        onAddToggle={() => setShowAddDream(!showAddDream)}
        showAdd={showAddDream}
      />
      {showAddDream && <AddDream addDream={addDream} />}

      <DreamsCollection dreams={dreamsCollection} onDelete={deleteDream} />
    </div>
  );
}

//this runs when the page builds
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/dreams`);

  const dreams = await res.json();

  //this passes the current data to the component to be used as props
  return {
    props: {
      dreams,
    },
  };
};
