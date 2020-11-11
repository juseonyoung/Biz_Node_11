import React from "react";

// (props) : 전달받은 매개변수 모두 사용하겟다
// {변수명} : 전달받은 매개변수 중 변수명에 해당하는 값만 추출해달라
const PhoneList = ({ phoneBook }) => {
  const phoneItems = phoneBook.map((phone) => {
    return (
      <tr>
        <td>{phone.id}</td>
        <td>{phone.name}</td>
        <td>{phone.number}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>전화번호</th>
      </tr>
      {phoneItems}
    </table>
  );
};

export default PhoneList;
