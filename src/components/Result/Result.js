import React from "react";
import HomeButton from "../UI/HomeButton/HomeButton";
import "./Result.css";

const Result = (props) => {
  return (
    <div className="Result">
      <h1 className="ResultHeader">
        GAME
        <br />
        QUIZ
      </h1>
      <div className="ResultBox">
        <span>Game over!</span>
        <h3>
          Your score: <span className="Score">{props.score}</span>
        </h3>
      </div>
      <div className="ResultIcons">
        <div className="IconGroup">
          <i className="fa fa-share-alt fa-2x Icon" aria-hidden="true"></i>
          <p>Share</p>
        </div>
        <div className="IconGroup">
          <i className="fa fa-trophy fa-2x Icon" aria-hidden="true"></i>
          <p>High score</p>
        </div>
      </div>
      <HomeButton clicked={props.onPlayAgain}>Next Level</HomeButton>
    </div>
  );
};

export default Result;
