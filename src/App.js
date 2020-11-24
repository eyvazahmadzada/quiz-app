import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./containers/Login/Login";
import Offline from "./containers/Offline/Offline";
import Profile from "./containers/Profile/Profile";
import Quiz from "./containers/Quiz/Quiz";
import Register from "./containers/Register/Register";
import ScoreBoard from "./containers/ScoreBoard/ScoreBoard";
import Layout from "./hoc/Layout/Layout";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  let app = <Home onStart={setIsStarted} />;
  if (isStarted) {
    app = <Quiz />;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Layout>
            <Route path="/" exact render={() => app}></Route>
            <Route path="/register" render={() => <Register />}></Route>
            <Route path="/login" render={() => <Login />}></Route>
            <Route path="/profile" render={() => <Profile />}></Route>
            <Route path="/scoreboard" render={() => <ScoreBoard />}></Route>
            <Route path="/offline" render={() => <Offline />}></Route>
          </Layout>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
