import React, { Component } from "react";
import spinner from "../assets/spinner/repel.svg";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinner} alt="loadin..." />
      </div>
    );
  }
}

export default Spinner;
