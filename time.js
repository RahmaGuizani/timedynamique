import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Hour: "00 :", Minute: "00 :", Second: "00" };
  }

  render() {
    return (
      <div>
        <div className="Title">
          <h1 className="heure">Hour</h1>
          <h1 className="minute">Minute</h1>
          <h1 className="second">Second</h1>
        </div>
        <div className="Inputs-value">
          <input value={this.state.Hour} />
          <input value={this.state.Minute} />
          <input value={this.state.Second} />
        </div>

        <div className="button-value">
          <button className="button1" type="button">
            Start
          </button>
          <button className="button2" type="button">
            Clear
          </button>
        </div>
      </div>
    );
  }
}
