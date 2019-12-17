import React from "react";

export const SingleProductImage = ({ imgURL, idx }) => {
  let cName = "product-image_container";
  if (idx === 0) {
    cName += " first-product";
  }
  return (
    <div className={cName}>
      <img src={imgURL} height="200px" width="200px" />
    </div>
  );
};
