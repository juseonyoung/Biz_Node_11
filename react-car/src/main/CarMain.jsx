import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 1;
  state = {
    carList: [
      {
        p_id: 1,
        p_divi: "연료주유",
        p_start: "2020-11",
        p_end: "2021-01",
        p_distance: "100km",
        p_cost: "50,000",
        p_place: "강릉",
      },
      {
        p_id: 2,
        p_divi: "경비",
        p_start: "2020-12",
        p_end: "2021-01",
        p_distance: "500km",
        p_cost: "100,000",
        p_place: "광주",
      },
    ],
  };

  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.carList);
    const thisString = JSON.stringify(this.state.carList);
    if (preString !== thisString) {
      localStorage.setItem("carList", thisString);
    }
  }
  componentDidMount() {
    const loadCarList = localStorage.getItem("carList");
    if (loadCarList) {
      const jsonCarList = JSON.parse(loadCarList);
      this.setState({ carList: jsonCarList });
      this.id = jsonCarList.length;
    }
  }

  carInsert = (car_start, car_end, car_distance, car_cost, car_place) => {
    const date = new Date();
    const car = {
      p_id: ++this.id,
      p_divi: "연료",
      p_start: date.toString(),
      p_end: "",
      p_distance: "100km",
      p_cost: "100,000",
      p_place: "강릉",
    };
    this.setState({ carList: this.state.carList.concat({ ...car }) }); // concat은 bucketList를 건드리지 않고 내용바꾸는 메서드

    // 전개연산자를 사용하는 방법
    this.setState({ carList: [...this.state.carList, car] });
  };

  updateCar = (id, distance, cost, place) => {
    const updateCarList = this.state.carList.mp((car) => {
      if (car.p_id === Number(id)) {
        return {
          ...car,
          p_distance: distance,
          p_cost: cost,
          p_place: place,
        };
      } else {
        return car;
      }
    });
    this.setState({ carList: updateCarList });
  };

  render() {
    return (
      <div>
        <p>
          <CarInsert onCreate={this.onCreate} />
        </p>

        <p>
          <CarList
            carList={this.state.carList}
            updateCar={this.state.updateCar}
          />
        </p>
      </div>
    );
  }
}

export default CarMain;
