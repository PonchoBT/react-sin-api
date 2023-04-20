import React from "react";

const names = ["Juan", "María", "Luis", "Ana"];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
export default NameList;
