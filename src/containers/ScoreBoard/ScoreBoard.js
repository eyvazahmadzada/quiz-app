import React from "react";
import RankCard from "../../components/ScoreBoard/RankCard/RankCard";
import TopCard from "../../components/ScoreBoard/TopCard/TopCard";
import "./ScoreBoard.css";

const ScoreBoard = (props) => {
  return (
    <div className="ScoreBoard">
      <h2>Leaderboard</h2>
      <div className="ScoreBoardTop">
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
      <div className="ScoreBoardRanking">
        <RankCard />
        <RankCard />
        <RankCard />
      </div>
      <div className="UserRanking">
        <RankCard />
      </div>
    </div>
  );
};

export default ScoreBoard;
