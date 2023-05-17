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
import { useShop } from "../../context/ShopContext";

const Links = ({handleClick}) => {
  return (
      <ul className="navbar-links">
        <li onClick={handleClick}>
          <Link to="/" >Accueil</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/shop">Boutique</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">A propos</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/contact">Nous contacter</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/account">Mon compte</Link>
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
            <Link to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </Link>
          </Badge>
        </IconButton>
      </div>
      </div>

      <div className="mobile-cart">
        <IconButton style={{ marginRight: "0" }}>
          <Badge badgeContent={products.length} color="primary">
            <Link to={"../checkout"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </Link>
          </Badge>
        </IconButton>
      </div>

    </div>
  );
}
