import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from './components/TourList'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <TourList></TourList>
      </>
    );
  }
}
