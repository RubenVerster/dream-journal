import React, { useState } from 'react';

import addDreamStyles from '../styles/AddDream.module.css';

// so cool that walking on a dream - empire of the sun started playing now XD

const AddDream = ({ addDream }) => {
  const [dreamTitle, setDreamTitle] = useState('');
  const [dreamDate, setDreamDate] = useState('');
  const [dreamContent, setDreamContent] = useState('');
  const [dreamExcerpt, setDreamExcerpt] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!dreamTitle) {
      alert('Please Fill In Missing Memory Fragments');
      return;
    }

    addDream({ dreamTitle, dreamExcerpt, dreamContent, dreamDate });

    setDreamTitle('');
    setDreamDate('');
    setDreamContent('');
    setDreamExcerpt('');
  };

  return (
    <div className={addDreamStyles.container}>
      <form onSubmit={onSubmit} className={addDreamStyles.addForm}>
        <div className={addDreamStyles.formControl}>
          <label>Dream Title</label>
          <input
            value={dreamTitle}
            onChange={(e) => setDreamTitle(e.target.value)}
            type="text"
            placeholder="Add Dream"
          />
        </div>

        <div className={addDreamStyles.formControl}>
          <label>Dream Excerpt</label>
          <input
            value={dreamExcerpt}
            onChange={(e) => setDreamExcerpt(e.target.value)}
            type="text"
            placeholder="Something That Stood Out The Most"
          />
        </div>

        <div className={addDreamStyles.formControl}>
          <label>Dream Content</label>
          <textarea
            className={addDreamStyles.textarea}
            value={dreamContent}
            onChange={(e) => setDreamContent(e.target.value)}
            type="text"
            placeholder="Everything You Can Recall"
          />
        </div>

        <div className={addDreamStyles.formControl}>
          <label>Dream Date</label>
          <input
            value={dreamDate}
            onChange={(e) => setDreamDate(e.target.value)}
            type="text"
            placeholder="Add The Date Of Your Dream"
          />
        </div>

        <input
          className={addDreamStyles.btn}
          type="submit"
          value="Save Dream"
        />
      </form>
    </div>
  );
};

export default AddDream;
