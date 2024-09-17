import PropTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ ratings, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <p className={css.textGood}>Good: {ratings.good}</p>
      <p className={css.textNeutral}>Neutral: {ratings.neutral}</p>
      <p className={css.textBad}>Bad: {ratings.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positivePercentage}%</p>
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
