import React from "react";
import HomeButton from "../UI/HomeButton/HomeButton";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home">
      <h1 className="HomeHeader">GAME QUIZ</h1>
      <section className="HomeMain">
        <p>How to play?</p>
        <HomeButton clicked={() => props.onStart(true)}>
          Start playing
        </HomeButton>
      </section>
    </div>
  );
};

export default Home;
