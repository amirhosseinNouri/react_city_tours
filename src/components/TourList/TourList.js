import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    console.log(id);
  };

  render() {
    console.log(this.state.tours);
    return (
      <div>
        <h2>Hello from Tourlist</h2>
        <Tour></Tour>
      </div>
    );
  }
}
