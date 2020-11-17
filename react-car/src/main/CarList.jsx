import React, { Component } from "react";
import CarItem from "./CarItem";
import "../css/CarList.css";

class CarList extends Component {
  render() {
    const { carList, updateCar } = this.props;
    const carItemList = carList.map((car, index) => {
      return <CarItem car={car} updateCar={updateCar} index={index} />;
    });
    return (
      <section className="w3-container-fluid w3-margin">
        <table className="car-list">
          <thead>
            <tr>
              <th>No.</th>
              <th>구분</th>
              <th>시작일시</th>
              <th>종료일시</th>
              <th>현재거리</th>
              <th>소요비용</th>
              <th>장소</th>
            </tr>
          </thead>
          <tbody>{carItemList}</tbody>
        </table>
      </section>
    );
  }
}

export default CarList;
