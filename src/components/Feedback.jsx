import PropTypes from "prop-types";

const Feedback = ({ ratings, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <p>Good: {ratings.good}</p>
      <p>Neutral: {ratings.neutral}</p>
      <p>Bad: {ratings.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}</p>
    </div>
  );
};

Feedback.propTypes = {
  ratings: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;
