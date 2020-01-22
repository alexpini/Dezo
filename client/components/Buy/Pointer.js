import React from "react";

export const Pointer = props => {
  const { store } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "3rem"
      }}
    >
      <div>{store.name}</div>
      <div>{store.address1}</div>
      <div>{store.city}</div>
      <div>{store.state}</div>
      <div>{store.zip}</div>
      {/* <img src={"../../assets/images/dezo-logo.png"} width="30" height="30" /> */}
    </div>
  );
};
