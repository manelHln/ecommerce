import { Paper, Typography } from "@mui/material";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { bg2 } from "../../images/Images";
import "./Category.css";

export default function Category() {
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
      <img src={bg2} alt="A product" className="category-img" />
      <div className="category-icons">
        <div className="category-icon">
          <AiFillEye />
        </div>
        <div className="category-icon">
          <RiShoppingBasket2Line />
        </div>
      </div>
      <div className="category-title">
        <Typography>Category</Typography>
      </div>
    </Paper>
  );
}
