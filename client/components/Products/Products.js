import React, { Component } from "react";
import { SingleProduct } from "./SingleProduct";
import { SingleProductImage } from "./SingleProductImage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../store";

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }
  deleteP = id => {
    this.props.deleteProduct(id);
  };
  render() {
    console.log(this.props);
    return (
      <div id="products">
        {this.props.products.map((product, idx) => {
          let cName = "product-container";
          if (idx === products.length - 1) {
            cName += " last-product";
          }
          if (idx % 2 === 0) {
            return (
              <section key={product.id} className={cName}>
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
                <SingleProduct
                  product={product}
                  idx={idx}
                  deleteP={this.deleteP}
                />
              </section>
            );
          } else {
            return (
              <section key={product.id} className={cName}>
                <SingleProduct
                  product={product}
                  idx={idx}
                  deleteP={this.deleteP}
                />
                <SingleProductImage imgURL={product.imgURL} idx={idx} />
              </section>
            );
          }
        })}
        <div>
          <p style={{ textAlign: "center" }}>
            this will only be available through an admin
          </p>
          <h1 style={{ textAlign: "center" }}>
            <Link to="/products/create" style={{ textDecoration: "none" }}>
              Create Product
            </Link>
          </h1>
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

const mS = ({ products }) => ({ products });

const mD = {
  getProducts: getProducts,
  deleteProduct: deleteProduct
};

export default connect(mS, mD)(Products);
