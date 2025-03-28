import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.feedback}>
      <p>Total feedback: {totalFeedback}</p>
      <p className="positive">Good: {feedback.good}</p>
      <p className="neutral">Neutral: {feedback.neutral}</p>
      <p className="bad">Bad: {feedback.bad}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
