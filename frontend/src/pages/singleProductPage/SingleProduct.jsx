import React from "react";
import { product10 } from "../../images/Images";
import { Button, Grid } from "@mui/material";
import { RiShoppingBasket2Line } from "react-icons/ri";
import {AllProducts} from "../../dummyData"
import Product from "../../templates/product/Product"
import "./singleProduct.css";


const qtyInputStyle = {
  borderColor: "#ddd",
  borderWidth: "1px",
  borderStyle: "solid",
  color: "#666",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  outline: "none",
  textAlign: "center",
  padding: "0.3rem",
  width: "4rem",
  minHeight: "35px",
  verticalAlign: "middle",
};

const SingleProduct = () => {
  return (
    <div className="singleProductContainer">
      <div className="singleProductUp">
        <div className="singleProductImg">
          <img src={product10} alt="product" />
        </div>
        <div className="singleProductInfo">
          <p className="single-product-category">Category1/category2</p>
          <p className="single-product-title">Title</p>
          <p className="single-product-price">50$</p>
          <p className="single-product-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="single-product-input">
            <input
              type="number"
              step="1"
              min="0"
              title="Qty"
              inputMode="numeric"
              autoComplete="off"
              style={qtyInputStyle}
            />
            <Button variant="outlined" startIcon={<RiShoppingBasket2Line />}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="singleProductDown">
        <h2>Related Products</h2>
        <Grid container spacing={2} my={2}>
        {AllProducts.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} lg={3} mb={3} key={`${product.name} ${index}`}>
              <Product product={product} />
            </Grid>
          );
        })}
        </Grid>
      </div>
    </div>
  );
};

export default SingleProduct;
