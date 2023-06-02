import { IconButton } from "@mui/material";
import React from "react";
import { bg1 } from "../images/Images";
import deleteIcon from "/assets/icon-delete.svg";

const PRICE = 125;

const Product = ({ onOrderedQuant, onReset }) => {
  return (
    <div className="product">
      <img src={bg1} alt="product-thumbnail" />
      <div className="info">
        <p>fall limited edition sneakers</p>
        <div className="price">
          <span> {`$${PRICE.toFixed(2)}`} </span>
          <span> {`$${(PRICE).toFixed(2)}`} </span>
        </div>
      </div>
      <IconButton
        className="delete-button"
        size="small"
        disableRipple
        onClick={onReset}
      >
        <img src={deleteIcon} alt="delete-item" />
      </IconButton>
    </div>
  );
};

export default Product;
