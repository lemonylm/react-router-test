import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {/* <NavLink activeClassName="active" className="item" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/home">
          Home
        </NavLink> */}
        <MyNavLink to="/about" >About</MyNavLink>
        <MyNavLink to="/home" >Home</MyNavLink>

        <Route path="/about" component={About}></Route>
        <Route path="/Home" component={Home}></Route>
      </div>
    );
  }
}
