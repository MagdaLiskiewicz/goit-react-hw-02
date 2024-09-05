// import "./App.css";

import { useState, useEffect } from "react";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

const App = () => {
  const [ratings, setRatings] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("ratings"));
    if (savedRatings) {
      setRatings(savedRatings);
    }
  }, []);

  useEffect(() => {
    if (ratings.good !== 0 || ratings.neutral !== 0 || ratings.bad !== 0) {
      window.localStorage.setItem("ratings", JSON.stringify(ratings));
    }
  }, [ratings]);

  const updateFeedback = (feedbackType) => {
    setRatings((prevRatings) => {
      return {
        ...prevRatings,
        [feedbackType]: prevRatings[feedbackType] + 1,
      };
    });
  };

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;

  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((ratings.good + ratings.neutral) / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setRatings(() => {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    });
    window.localStorage.removeItem("ratings");
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          ratings={ratings}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
