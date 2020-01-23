import React from "react";
import WhereToBuyCreate from "./WhereToBuyCreate";
import { BuyHeader } from "./BuyHeader";

class WhereToBuyMaster extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        style={{
          backgroundImage: "url(../../assets/images/dezo-product-resize.png)",
          width: "100% !important"
        }}
      >
      <BuyHeader />
        <div>
          <WhereToBuyCreate />
        </div>

      </div>
    );
  }
}

export default WhereToBuyMaster;
