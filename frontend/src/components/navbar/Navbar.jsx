import {
  Badge,
  IconButton,
  Box,
  Avatar,
  MenuItem,
  ListItemIcon,
  Menu,
  Divider,
  Tooltip,
} from "@mui/material";
import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSearchLine,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import "./navbar.css";

const Links = () => {
  return (
      <ul className="navbar-links">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>     
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenuState] = React.useState(false);

  return (
    <div className="navbar-container">
      <div className="mobile-menu">
        <RiMenu3Line size={27} onClick={() => setToggleMenuState(true)} />
        {toggleMenu && (
          <div>
            <RiCloseLine size={27} onClick={() => setToggleMenuState(false)} />
            <Links />
          </div>
        )}
      </div>

      <div className="logo">
        <p>.myShop</p>
      </div>

      <div className="navbar-links-container">
        <Links />
        <div>
        <IconButton style={{ marginRight: "0" }}>
          <Badge badgeContent={5} color="primary">
            <Link to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </Link>
          </Badge>
        </IconButton>
      </div>
      </div>

      <div className="mobile-cart">
        <IconButton style={{ marginRight: "0" }}>
          <Badge badgeContent={5} color="primary">
            <Link to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </Link>
          </Badge>
        </IconButton>
      </div>

    </div>
  );
}
