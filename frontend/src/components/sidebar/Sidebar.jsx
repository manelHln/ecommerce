import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { HiArrowSmRight } from "react-icons/hi";
import React from "react";
import "./sidebar.css";

const ProductThumbnail = () => {
  return (
        <Paper variant="outlined" square sx={{ mb: "8px" }}>
          <Grid container alignItems="start" p={2}>
            <Grid item mr={2}>
              <img
                src="/assets/pictures/bg_1.jpg"
                alt="product"
                className="sidebar-product-img"
              />
            </Grid>
            <Grid item alignItems="flex-end">
              <Typography variant="body1" sx={{ maxWidth: "200px" }}>
                <span className="sidebar-span">Pant</span>
                <span>20$</span>
              </Typography>
              <Typography variant="body2" color="primary">
                See more
              </Typography>
            </Grid>
          </Grid>
        </Paper>
  );
};

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Grid
        item
        sx={{
          mb: "8px",
          display: "flex",
          alignItems: "center",
          height: "40px",
          width: "100%",
          gap: "10px"
        }}
      >
        <input type="text" className="sidebar-search-input" />
        <div className="sidebar-search-btn">
          <HiArrowSmRight size={25} />
        </div>
      </Grid>
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
      <ProductThumbnail />
    </div>
  );
}
