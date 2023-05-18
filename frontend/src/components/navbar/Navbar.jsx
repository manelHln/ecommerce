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
import { NavLink } from "react-router-dom";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSearchLine,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import "./navbar.css";
import { useShop } from "../../context/ShopContext";

const Links = ({handleClick}) => {
  return (
      <ul className="navbar-links">
        <li onClick={handleClick}>
          <NavLink to="/" >Accueil</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/shop">Boutique</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/about">A propos</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/contact">Nous contacter</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/account">Mon compte</NavLink>
        </li>
      </ul>     
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenuState] = useState(false);
  const { products} = useShop()
  const handleClick = () => {
    setToggleMenuState(false)
  }

  return (
    <div className="navbar-container">
      <div className="mobile-menu">
        <RiMenu3Line size={27} onClick={() => setToggleMenuState(true)} />
        {toggleMenu && (
          <div>
            <RiCloseLine size={27} onClick={() => setToggleMenuState(false)} />
            <Links handleClick={handleClick} />
          </div>
        )}
      </div>

      <div className="logo">
        <p>.biboShop</p>
      </div>

      <div className="navbar-links-container">
        <Links />
        <div>
        <IconButton style={{ marginRight: "0" }}>
          <Badge badgeContent={products.length} color="primary" showZero>
            <NavLink to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </NavLink>
          </Badge>
        </IconButton>
      </div>
      </div>

      <div className="mobile-cart">
        <IconButton style={{ marginRight: "0" }}>
          <Badge badgeContent={products.length} color="primary">
            <NavLink to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </NavLink>
          </Badge>
        </IconButton>
      </div>

    </div>
  );
}
