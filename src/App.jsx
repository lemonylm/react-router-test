import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
        <Link className="item active" to="/about">
          About
        </Link>
        <Link className="item" to="/home">
          Home
        </Link>
        <Route path="/About" component={About}></Route>
        <Route path="/Home" component={Home}></Route>
      </div>
    );
  }
}
