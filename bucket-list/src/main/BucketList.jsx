import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  // render밖에서 어떤 함수에서 변수를 사용하는 방법
  // 사용하고자 하는 함수 내에서 보낸 변수를 분해 한 후 사용할 준비를 해야 한다.
  f1 = () => {
    const { bucketList } = this.props;
  };

  render() {
    // render안쪽에서 받을때 const
    // 부모 component에서 보낸 변수를 받아서 분해 한 후 사용할 준비
    const {
      bucketList,
      handleFlagClick,
      updateBucket,
      handleCancel,
      handleComplete,
    } = this.props;

    const bItemList = bucketList.map((bucket) => {
      return (
        <BucketItem
          bucket={bucket}
          handleFlagClick={handleFlagClick}
          updateBucket={updateBucket}
          handleCancel={handleCancel}
          handleComplete={handleComplete}
        />
      );
    });

    return (
      <section className="w3-container-fluid w3-margin">
        <table className="w3-table w3-table-all">
          <tr>
            <th>중요도</th>
            <th>날짜</th>
            <th>Bucket</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {bItemList}
        </table>
      </section>
    );
  }
}

export default BucketList;
