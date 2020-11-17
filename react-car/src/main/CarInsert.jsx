import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  state = {
    p_start: "",
    p_end: "",
    p_distance: "",
    p_cost: "",
    p_place: "",
    p_id: 0,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      const { carInsert } = this.state.carInsert;
      carInsert(carInsert);
    }
  };
  onCreate = (e) => {
    const { onCreate } = this.props;
    onCreate(this.state);
  };
  render() {
    return (
      <section className="w3-container-fluid">
        <div className="car-list">
          <input
            value={this.state.p_start}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            placeholder="시작일시"
          />
          <input
            value={this.state.p_end}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            placeholder="종료일시"
          />
          <input
            value={this.state.p_distance}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            placeholder="현재거리"
          />
          <input
            value={this.state.p_cost}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            placeholder="소요비용"
          />
          <input
            value={this.state.p_place}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            placeholder="장소"
          />

          <button onClick={this.onCreate}>저장</button>
        </div>
      </section>
    );
  }
}

export default CarInsert;
