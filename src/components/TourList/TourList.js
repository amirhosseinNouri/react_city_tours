import React, { Component } from "react";
import "./tourlist.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const filtered = this.state.tours.filter((item) => item.id !== id);
    this.setState({
      tours: filtered,
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourList">
        {tours.map((item) => (
          <Tour key={item.id} tour={item} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
