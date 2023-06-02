import React, { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import useAuth from "../hooks/useAuth";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import "./addToCartBtn.css";
import axios from "axios";

const OtherButtons = ({ handleAdd, handleRemove }) => {
  return (
    <Grid item>
      <LoadingButton
        variant="outlined"
        className="btn-transition"
        onClick={handleAdd}
      >
        +
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        className="btn-transition"
        sx={{ mx: "5px" }}
        onClick={handleRemove}
      >
        -
      </LoadingButton>
    </Grid>
  );
};

const AddToCartButton = ({ product }) => {
  const { addToCart, removeFromCart, products } = useShop();
  // const productExistsInCart = products.includes(product["_id"]);
  const productExistsInCart = false
  const { userInfo } = useAuth();

  const handleButtonState = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_ENV}cart`,
        {
          productId: product["_id"],
          userId: userInfo._id,
          quantity: 1
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.accessToken}`,
          },
          withCredentials: true
        }
      )
      .then((response) => {
        console.log(response.data);
        addToCart(response.data)
      })
      .catch((error) => {});
  };

  const handleAdd = () => {
    addToCart(product["_id"]);
  };
  const handleRemove = () => {
    removeFromCart(product["_id"]);
  };

  return (
    <div>
      {productExistsInCart ? (
        <OtherButtons handleAdd={handleAdd} handleRemove={handleRemove} />
      ) : (
        <LoadingButton
          variant="outlined"
          className="typography add-btn-transition"
          startIcon={<RiShoppingBasket2Line />}
          onClick={handleButtonState}
        >
          Ajouter au panier
        </LoadingButton>
      )}
    </div>
  );
};

export default AddToCartButton;
