import React, { Component } from "react";
import { SingleProduct } from "./SingleProduct";
import { SingleProductImage } from "./SingleProductImage";
import { Link } from "react-router-dom";

const products = [
  {
    id: "1wertt-ww32-2ssd-jkidgd",
    title: "Coconut Water",
    description:
      "This tastes like delicious coconuts. Coconut, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: "../../assets/images/drink.jpeg"
  },
  {
    id: "1wertt-ww32-2ssd-wwgtrr",
    title: "Cactus Water",
    description:
      "This tastes like delicious cacti. Cactus, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: "../../assets/images/drink.jpeg"
  },
  {
    id: "1wertt-ww32-2ssd-dfttgh",
    title: "Watermelon Water",
    description:
      "This tastes like delicious watermelons. Watermelon, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: "../../assets/images/drink.jpeg"
  }
];

class Products extends Component {
  render() {
    return (
      <div id="products">
        {products.map((product, idx) => {
          let cName = "product-container";
          if (idx === products.length - 1) {
            cName += " last-product";
          }
          if (idx % 2 === 0) {
            return (
              <section key={product.id} className={cName}>
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
                <SingleProduct product={product} idx={idx} />
              </section>
            );
          } else {
            return (
              <section key={product.id} className={cName}>
                <SingleProduct product={product} idx={idx} />
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
              </section>
            );
          }
        })}
        <div>
          <div className="find-button">
            <Link to="/buy" style={{ textDecoration: "none" }}>
              Find Dezo Near Me
            </Link>
          </div>
          <img
            className="product-full_image"
            src="https://theharrispoll.com/wp-content/uploads/2017/12/summer-drinking_banner.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Products;
