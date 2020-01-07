import React from "react";

export const Pointer = ({ name, position }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{position.lat}</div>
      <div>{position.lng}</div>
      <img src={"../../assets/images/dezo-logo.png"} width="30" height="30" />
    </div>
  );
};
