import React from 'react';
import styles from './Options.module.css';

const Options = ({ onFeedback, totalFeedback }) => {
  const handleReset = () => {
    onFeedback('reset');
  };

  return (
    <div className={styles.options}>
      <button onClick={() => onFeedback('good')} className={styles.button}>Good</button>
      <button onClick={() => onFeedback('neutral')} className={styles.button}>Neutral</button>
      <button onClick={() => onFeedback('bad')} className={styles.button}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={handleReset} className={`${styles.button} ${styles.resetButton}`}>Reset</button>
      )}
    </div>
  );
};

export default Options;
