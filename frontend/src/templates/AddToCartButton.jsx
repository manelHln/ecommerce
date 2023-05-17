import React, { useState } from "react";
import {useShop} from "../context/ShopContext";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Button, Grid } from "@mui/material";
import "./addToCartBtn.css";

const OtherButtons = ({handleAdd, handleRemove}) => {
  return (
    <Grid item>
      <Button variant="outlined" className="btn-transition" onClick={handleAdd}>
        +
      </Button>
      <Button variant="outlined" className="btn-transition" sx={{ mx: "5px" }} onClick={handleRemove}>
        -
      </Button>
    </Grid>
  );
};

const AddToCartButton = ({product}) => {
  const { addToCart, removeFromCart, products } = useShop();
  const productExistsInCart = products.includes(product)

  const handleButtonState = () => {
    addToCart(product)
  };

  const handleAdd = () => {
    addToCart(product)
  }
  const handleRemove = () => {
    removeFromCart(product)
  }

  return (
    <div>
      {productExistsInCart ? (
        <OtherButtons handleAdd={handleAdd} handleRemove={handleRemove} />
      ) : (
        <Button
          variant="outlined"
          className="typography add-btn-transition"
          startIcon={<RiShoppingBasket2Line />}
          onClick={handleButtonState}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
