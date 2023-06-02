import { Paper, Typography, Button } from "@mui/material";
import { AiFillEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Category.css";

export default function Category({ category }) {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "320px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={category.image} alt="A product" className="category-img" />
      {/* <div className="category-icons">
        <div className="category-icon">
          <AiFillEye />
        </div>
        <div className="category-icon">
          <RiShoppingBasket2Line />
        </div>
      </div> */}
      <div className="category-title">
        <Typography>{category.name}</Typography>
      </div>

      <div className="category-footer">
        <Button variant="contained" startIcon={<AiFillEye />}>
          <NavLink to={`/shop/${category.name}`}>Voir les produits</NavLink>
        </Button>
      </div>
    </Paper>
  );
}
