import { updateLocale } from "moment";
import React, { Component } from "react";
import Moment from "react-moment";

class CarItem extends Component {
  render() {
    const { index, car, updateCar } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{car.p_divi}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.p_start}</Moment>
        </td>

        <td>{car.p_end}</td>
        <td onClick={() => updateCar(car.p_id)} style={{ cursor: "pointer" }}>
          {car.p_distance}
        </td>
        <td onClick={() => updateCar(car.p_id)} style={{ cursor: "pointer" }}>
          {car.p_cost}
        </td>
        <td onClick={() => updateCar(car.p_id)} style={{ cursor: "pointer" }}>
          {car.p_place}
        </td>
      </tr>
    );
  }
}

export default CarItem;
