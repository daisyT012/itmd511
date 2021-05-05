import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Tips from "./components/Tips";
import Submit from "./components/Submit";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/tips" exact component={() => <Tips />} />
          <Route path="/submit" exact component={() => <Submit />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
