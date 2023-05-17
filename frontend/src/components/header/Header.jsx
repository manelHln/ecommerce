import React from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
      <div className="header-container">
        <div>
          <p className="header-title">
            Autumn
            <br /> Collection
          </p>
          <p className="header-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Link to="../shop">
            <div className="header-btn">
              Shop now <RiShoppingBasket2Line size={25} />
            </div>
          </Link>
        </div>
      </div>
  );
}
