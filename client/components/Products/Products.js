import React, { Component } from "react";
import { SingleProduct } from "./SingleProduct";
import { SingleProductImage } from "./SingleProductImage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../store";

const products = [
  {
 master
    id: 1,
    imgURL: "../../assets/images/drink.jpeg",
    description: [
      "Coconut Water",
      "Acai Berry",
      "Himalayan Sea Salt",
      "Gluten Free Vodka",
      "Carbonation"
    ],
    color: "#ff99dd"
  },
  {
    id: 2,
    imgURL: "../../assets/images/drink.jpeg",
    description: [
      "Prickly Pear",
      "Lemon",
      "Himalayan Sea Salt",
      "Gluten Free Vodka",
      "Carbonation"
    ],
    color: "#ff5050"
  },
  {
    id: 3,
    imgURL: "../../assets/images/drink.jpeg",
    description: [
      "Watermelon Water",
      "Cucumber & Lemon",
      "Himalayan Sea Salt",
      "Gluten Free Vodka",
      "Carbonation"
    ],
    color: "#ffcc66"

    id: "1wertt-ww32-2ssd-jkidgd",
    title: "Coconut Water",
    description:
      "This tastes like delicious coconuts. Coconut, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: ""
  },
  {
    id: "1wertt-ww32-2ssd-wwgtrr",
    title: "Cactus Water",
    description:
      "This tastes like delicious cacti. Cactus, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: ""
  },
  {
    id: "1wertt-ww32-2ssd-dfttgh",
    title: "Watermelon Water",
    description:
      "This tastes like delicious watermelons. Watermelon, water, and fermented sugar make this concoction an instant fav! Please enjoy responsibly. I am making this text longer to signify a real flavor description.",
    imgURL: ""
 dev
  }
];

class Products extends Component {
  state = {
    products: []
  };
  componentWillMount() {
    //if they ever want to add products
    // this.props.getProducts();
    this.setState({ products });
  }
  // deleteP = id => {
  //   this.props.deleteProduct(id);
  // };
  render() {
    return (
      <section>
      <div id="products">
        {this.state.products.map((product, idx) => {
          let cName = "product-container";

          if (idx % 2 === 0) {
            return (
              <section key={product.id} className={cName}>
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
                <SingleProduct
                  product={product}
                  idx={idx}
                  // deleteP={this.deleteP}
                />
              </section>
            );
          } else {
            return (
              <section key={product.id} className={cName}>
                <SingleProduct
                  product={product}
                  idx={idx}
                  // deleteP={this.deleteP}
                />
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
              </section>
            );
          }
        })}
        <div>
          <img
            className="product-full_image"
            src="https://theharrispoll.com/wp-content/uploads/2017/12/summer-drinking_banner.jpg"
          />
        </div>
      </div>
      </section>
    );
  }
}

const mS = ({ products }) => ({ products });

const mD = {
  getProducts: getProducts,
  deleteProduct: deleteProduct
};

export default connect(mS, mD)(Products);
