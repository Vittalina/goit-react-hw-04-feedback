import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => {
    return good + bad + neutral;
  };

  const countPositivePercentage = () => {
    return Math.round((good / countTotal()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickBtn}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
