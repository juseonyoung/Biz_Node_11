import React, { Component } from "react";
import BBsItem from "./BBsItem";
import "../css/BBsList.css";

class BBsList extends Component {
  render() {
    const { bbsList, fetchBBs, handleUpdate } = this.props;
    const bbsItemList = bbsList.map((bbs, index) => {
      return (
        <BBsItem
          key={bbs.id}
          index={index}
          bbs={bbs}
          fetchBBs={fetchBBs}
          handleUpdate={handleUpdate}
        />
      );
    });
    return (
      <table className="bbs-list">
        <thead>
          <tr>
            <th>No</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>제목</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>{bbsItemList}</tbody>
      </table>
    );
  }
}

export default BBsList;
