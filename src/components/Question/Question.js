import React, { useEffect, useState } from "react";
import "./Question.css";

const Question = (props) => {
  const initial = 30;
  const [timeLeft, setTimeLeft] = useState(initial);
  const { handleSubmission } = props;

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(initial);
      handleSubmission(null, false);
    }
    let timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, handleSubmission]);

  const submitAnswer = (event) => {
    let correctAnswerCard = Array.from(
      document.querySelectorAll(".AnswerCard>p")
    ).find((answer) => {
      return answer.textContent === props.questionData.correctAnswer;
    });
    correctAnswerCard.parentElement.classList.add("correct");
    const answerCard = event.target;
    const userAnswer = answerCard.textContent;

    let isCorrect = true;
    const scoreBoard = answerCard.nextSibling;
    scoreBoard.style.backgroundColor = "#5a6de7";
    scoreBoard.firstElementChild.textContent = "+20";

    if (props.questionData.correctAnswer !== userAnswer) {
      isCorrect = false;
      scoreBoard.style.backgroundColor = "#E1443B";
      scoreBoard.firstElementChild.textContent = "-10";
      answerCard.parentElement.classList.add("incorrect");
    }
    scoreBoard.style.display = "block";

    setTimeout(() => {
      handleSubmission(userAnswer, isCorrect);
      correctAnswerCard.parentElement.classList.remove("correct");
      answerCard.parentElement.classList.remove("incorrect");
      scoreBoard.style.display = "none";
      if (props.questionData.id + 1 < props.quizLength) {
        setTimeLeft(initial);
      }
    }, 750);
  };

  return (
    <div className="Wrapper">
      <div className="Question">
        <div className="QuestionCard">
          <span className="QuestionIndex">
            {props.questionData.id + 1}/{props.quizLength}
          </span>
          <p>{props.questionData.question}</p>
        </div>
        <p className="QuestionTimer">
          00:{timeLeft.toString().length === 1 ? `0${timeLeft}` : timeLeft}
        </p>
      </div>
      <div className="Answer">
        <p className="AnswerHeader">Select the correct answer</p>
        {props.questionData.answers.map((answer, index) => {
          return (
            <div className="AnswerCard" key={index}>
              <p onClick={(event) => submitAnswer(event)}>{answer}</p>
              <div className="checked">
                <span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
