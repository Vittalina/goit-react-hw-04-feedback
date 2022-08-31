import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button
      type="button"
      name={option}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
