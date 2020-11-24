import React, { Component } from "react";
import Level from "../../components/Level/Level";
import Quiz from "../Quiz/Quiz";
import "./Offline.css";

class Offline extends Component {
  state = {
    nb_levels: 10,
    passScore: 4,
    levelScore: [],
    currentLevel: 1,
    isStarted: false
  };

  componentDidMount() {
    if (localStorage.getItem("game")) {
      const gameData = JSON.parse(localStorage.getItem("game"));
      this.setState({
        levelScore: gameData.levelScore,
        currentLevel: gameData.currentLevel
      });
    } else {
      this.setState({ levelScore: new Array(this.state.nb_levels).fill(0) });
    }
  }

  startGame = () => {
    this.setState({ isStarted: true });
  };

  gameOver = (score) => {
    const updatedLevelScore = [...this.state.levelScore];
    updatedLevelScore[this.state.currentLevel - 1] = score;

    if (score > this.state.passScore) {
      this.setState((prevState) => ({
        currentLevel: prevState.currentLevel + 1
      }));
    }

    const game = {
      currentLevel: this.state.currentLevel,
      levelScore: updatedLevelScore
    };
    this.setState({ levelScore: updatedLevelScore, isStarted: false });
    localStorage.setItem("game", JSON.stringify(game));
  };

  render() {
    const levels = [];
    this.state.levelScore.forEach((item, index) => {
      levels.push(
        <Level
          key={index}
          clicked={this.startGame}
          score={item}
          level={index + 1}
          currentLevel={this.state.currentLevel}
        />
      );
    });

    let context = (
      <React.Fragment>
        <h2>Levels</h2>
        <p>Pass score: {this.state.passScore}</p>
        {levels}
      </React.Fragment>
    );
    if (this.state.isStarted) {
      context = <Quiz onGameOver={this.gameOver} offline />;
    }

    return <div className="Offline">{context}</div>;
  }
}

export default Offline;
