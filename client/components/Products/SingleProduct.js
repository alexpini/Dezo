import React from "react";

export const SingleProduct = ({ product, idx, deleteP }) => {
  let cName = "product-desc_container";
  if (idx === 0) {
    cName += " first-product";
  }
  return (
    <div className={cName}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div onClick={() => deleteP(product.id)}>X</div>
    </div>
  );
};
