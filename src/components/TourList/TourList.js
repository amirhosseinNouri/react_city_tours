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
