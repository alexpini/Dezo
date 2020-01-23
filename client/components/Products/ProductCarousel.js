import React, { Component } from "react";
import { SingleProduct } from "./SingleProduct";
import { SingleProductImage } from "./SingleProductImage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../store";

const products = [
 {
   id: 1,
   imgURL: "assets/images/coconut-water.png",
   description: [
     "Coconut Water",
     "Açaí Berry",
     "Himalayan Sea Salt",
     "Gluten Free Vodka",
     "Carbonation"
   ],
   color: "#91cf5b"
 },
 {
   id: 2,
   imgURL: "assets/images/cactus-water.png",
   description: [
     "Prickly Pear",
     "Lemon",
     "Himalayan Sea Salt",
     "Gluten Free Vodka",
     "Carbonation"
   ],
   color: "#ded84b"
 },
 {
   id: 3,
   imgURL: "assets/images/watermelon-water.png",
   description: [
     "Watermelon Water",
     "Cucumber & Lemon",
     "Himalayan Sea Salt",
     "Gluten Free Vodka",
     "Carbonation"
   ],
   color: "#eb7c7e"
 }
];

class ProductCarousel extends Component {
 state = {
   products: []
 };
 componentDidMount() {
   //if they ever want to add products
   // this.props.getProducts();
   this.setState({ products });
 }
 // deleteP = id => {
 //   this.props.deleteProduct(id);
 // };
 render() {
   return (
   <div id="myCarousel" className="carousel slide"
         data-ride="carousel">
           <div className="carousel-inner" >
             {products.map((p, idx) => {
               let classN = "item";
               if (idx === 0) {
                 classN += " active";
               }
               return (
                  <div id="product-container" className={classN} key={p.id}>
                    <p id="product-description" className="col-xs-7" style={{color: `${p.color}`}}>{p.description[0]}<br></br>{p.description[1]}<br></br>{p.description[2]}<br></br>{p.description[3]}<br></br>{p.description[4]}</p>
                      <img src={`${p.imgURL}`} alt={p.description[0]}
                      className=".col-xs-5"
                      id="product-image"
                        style={{
                        width: "12vw",
                        margin: "0 !important"
                        }}
                      />
                  </div>
               );
             })}
           </div>
           <a
             className="left carousel-control"
             href="#myCarousel"
             data-slide="prev"
           >
             <span className="glyphicon glyphicon-chevron-left"></span>
             <span className="sr-only"
                     >Previous</span>
           </a>
           <a
             className="right carousel-control"
             href="#myCarousel"
             data-slide="next"
           >
             <span className="glyphicon glyphicon-chevron-right"></span>
             <span className="sr-only">Next</span>
           </a>
    </div>
   );
 }
}

const mS = ({ products }) => ({ products });

const mD = {
 getProducts: getProducts,
 deleteProduct: deleteProduct
};

export default connect(mS, mD)(ProductCarousel);

// <section>
// <div id="products">
//   <h1
//     id="product"
//     style={{
//       textAlign: "center",
//       textTransform: "uppercase",
//       fontSize: "3rem",
//       marginTop: "-4vh"
//     }}
//   ></h1>
//   {this.state.products.map((product, idx) => {
//     let cName = "product-container";

//     if (idx % 2 === 0) {
//       return (
//         <section key={product.id} className={cName}>
//           <SingleProductImage imgURL={product.imgURL} idx={idx} />
//           <SingleProduct
//             product={product}
//             idx={idx}
//             // deleteP={this.deleteP}
//           />
//         </section>
//       );
//     } else {
//       return (
//         <section key={product.id} className={cName}>
//           <SingleProduct
//             product={product}
//             idx={idx}
//             // deleteP={this.deleteP}
//           />
//           <SingleProductImage imgURL={product.imgURL} idx={idx} />
//         </section>
//       );
//     }
//   })}
//   {/* <div>
//     <img
//       className="product-full_image"
//       src="https://theharrispoll.com/wp-content/uploads/2017/12/summer-drinking_banner.jpg"
//     />
//   </div> */}
// </div>
// </section>


