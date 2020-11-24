import React from "react";
import "./Level.css";

const Level = (props) => {
  const isUnlocked = props.level <= props.currentLevel || props.level === 1;

  return (
    <div
      className="Level"
      style={{ backgroundColor: isUnlocked ? "#4E9DC2" : "#62C5F3" }}
      onClick={isUnlocked ? props.clicked : null}
    >
      <span className="LevelIcon">
        {isUnlocked ? (
          <i className="fa fa-unlock" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-lock" aria-hidden="true"></i>
        )}
      </span>
      <span>Level {props.level}</span>
      <span>{props.score}/10</span>
    </div>
  );
};

export default Level;
