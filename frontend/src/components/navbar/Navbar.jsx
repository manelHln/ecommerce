import {
  Badge,
  IconButton,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import {
  RiMenu3Line,
  RiCloseLine,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import { BiUserCircle, BiLogInCircle } from "react-icons/bi";
import "./navbar.css";
import { useShop } from "../../context/ShopContext";
import useAuth from "../../hooks/useAuth";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";

function AccountMenu({ username, isAdmin }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <Button
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ ml: 2 }}
            variant="outlined"
            size="small"
            disableElevation={true}
            startIcon={<BiUserCircle />}
          >
            {username}
          </Button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> <NavLink to="/profile">Mon Profile</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> <NavLink to="/account">Mon compte</NavLink>
        </MenuItem>
        <Divider />
        {isAdmin && (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <NavLink to="/dashboard/app">Dashboard</NavLink>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <NavLink to="/logout">Deconnexion</NavLink>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const Links = ({ handleClick }) => {
  return (
    <ul className="navbar-links">
      <li onClick={handleClick}>
        <NavLink to="/">Accueil</NavLink>
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
      <li onClick={handleClick} className="show-on-mobile">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li onClick={handleClick} className="show-on-mobile">
        <NavLink to="/account">Mon compte</NavLink>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenuState] = useState(false);
  const { products, addToCart } = useShop();
  const { userInfo } = useAuth();
  const [user, setUserInfo] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    setUserInfo(userInfo);
  }, [userInfo]);

  useEffect(() => {
    if (!user?.username) {
      return;
    }
    axios
      .get(`${process.env.REACT_APP_API_ENV}cart`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        let userCart = response.data;
        console.log(userCart);
        userCart.forEach((item) => addToCart(item));
      })
      .catch((error) => {});
  }, [user]);

  const handleClick = () => {
    setToggleMenuState(false);
  };

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

      <Logo />

      <div className="navbar-links-container">
        <Links />
      </div>

      {user?.username ? (
        <div className="show-on-desktop">
          <IconButton>
            <Badge
              badgeContent={products?.payload?.product?.products?.length}
              color="primary"
              showZero
            >
              <NavLink to={"../cart"}>
                <RiShoppingBasket2Line size={25} color="black" />
              </NavLink>
            </Badge>
          </IconButton>
          <AccountMenu username={user.username} isAdmin={user.isAdmin} />
        </div>
      ) : (
        <div className="show-on-desktop">
          <Button variant="outlined" size="small" startIcon={<BiLogInCircle />}>
            <NavLink to={"/login"}>Connexion</NavLink>
          </Button>
        </div>
      )}

      <div className="mobile-cart">
        <IconButton style={{ marginRight: "0" }}>
          <Badge
            badgeContent={products?.payload?.product?.products?.length}
            color="primary"
          >
            <NavLink to={"../cart"}>
              <RiShoppingBasket2Line size={25} color="black" />
            </NavLink>
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}
