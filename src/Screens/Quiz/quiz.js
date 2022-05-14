import React from "react";
import "../Quiz/quiz.scss";
import Steps from "../../Components/Stepper/steps";

const quiz = () => {
  return (
    <div className="quiz">
      <div className="title">Fit Together Quiz</div>
      <Steps />
    </div>
  );
};

export default quiz;
