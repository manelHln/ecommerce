import React from "react";
import AddToCartButton from "../templates/AddToCartButton";

const Description = ({product}) => {
  return (
    <section className="description">
      <p className="pre">{product.name}</p>
      <h1>{product.category.map((cat, index)=> (
        `${cat} `
      ))}</h1>
      <p className="desc">
        {product.desc}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>{product.price} FCFA</p>
        </div>
      </div>
      <div className="buttons">
        <AddToCartButton />
      </div>
    </section>
  );
};

export default Description;
