import axios from "axios";
import React, { Component } from "react";
import Question from "../../components/Question/Question";
import Result from "../../components/Result/Result";
import Spinner from "../../components/UI/Spinner/Spinner";

class Quiz extends Component {
  state = {
    quizData: [],
    currentQuestionIndex: 0,
    dataRetreived: false,
    score: 0,
    nb_correct: 0,
    gameOver: false,
    showSideDrawer: false
  };

  componentDidMount() {
    this.getData();
  }

  decode = (val) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = val;
    return txt.value;
  };

  getData = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
    );

    let quizData = response.data.results.map((item, index) => {
      return {
        id: index,
        question: this.decode(item.question),
        answers: [item.correct_answer, ...item.incorrect_answers]
          .map((answer) => this.decode(answer))
          .sort(() => {
            return 0.5 - Math.random();
          }),
        correctAnswer: this.decode(item.correct_answer)
      };
    });
    this.setState({ quizData: quizData, dataRetreived: true });
  };

  sendData = async () => {
    const quizData = this.state.quizData.map((item) => {
      return {
        id: item.id,
        question: item.question,
        correctAnswer: item.correctAnswer,
        userAnswer: item.userAnswer
      };
    });
    const data = {
      nb_correct: this.state.nb_correct,
      ...quizData
    };
    const response = await axios.post(
      "https://fleet-cirrus-274811.firebaseio.com/quiz.json",
      data
    );
    console.log(response.data);
  };

  handleSubmission = (curAnswer, isCurCorrect) => {
    if (!this.state.gameOver) {
      const updatedQuizIndex = {
        ...this.state.quizData[this.state.currentQuestionIndex],
        userAnswer: curAnswer
      };
      const updatedQuizData = [...this.state.quizData];
      updatedQuizData[this.state.currentQuestionIndex] = updatedQuizIndex;

      this.setState({ quizData: updatedQuizData });

      let scoreChange = -10;
      if (isCurCorrect) {
        scoreChange = 20;
        this.setState((prevState) => ({
          nb_correct: prevState.nb_correct + 1
        }));
      }
      this.setState((prevState) => ({ score: prevState.score + scoreChange }));

      if (this.state.currentQuestionIndex < this.state.quizData.length - 1) {
        this.setState((prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1
        }));
      } else {
        this.setState({ gameOver: true });
        if (this.props.offline) {
          this.props.onGameOver(this.state.nb_correct);
        } else {
          this.sendData();
        }
      }
    }
  };

  playAgain = () => {
    this.setState({
      quizData: [],
      currentQuestionIndex: 0,
      dataRetreived: false,
      score: 0,
      gameOver: false
    });
    this.getData();
  };

  render() {
    let context = <Spinner />;
    if (this.state.dataRetreived) {
      if (!this.state.gameOver) {
        context = (
          <React.Fragment>
            <Question
              questionData={
                this.state.quizData[this.state.currentQuestionIndex]
              }
              quizLength={this.state.quizData.length}
              handleSubmission={this.handleSubmission}
            />
          </React.Fragment>
        );
      } else {
        context = (
          <Result score={this.state.score} onPlayAgain={this.playAgain} />
        );
      }
    }
    return context;
  }
}

export default Quiz;
