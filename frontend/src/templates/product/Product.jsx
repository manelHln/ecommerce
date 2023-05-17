import { StarRateRounded } from "@mui/icons-material";
import { Grid, Paper, Typography, Icon, Button } from "@mui/material";
import AddToCartButton from "../AddToCartButton";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product({ product }) {
  // useEffect(() => {
  //     const fetchProduct = async () => {
  //         const product = await axios.get("http://localhost:8800/api/products/629f70544dedb947aa0ac4c8");
  //         console.log(product);
  //     };
  //     fetchProduct();
  // },[]);

  return (
    // <Grid item xs={12} md={6} lg={4} mb={3}>
    <Paper elevation={3}>
      <img
        src={product.image}
        alt="A product"
        className="product-img"
        style={{
          width: "100%",
          height: "15rem",
          objectFit: "cover",
        }}
      />
      <Grid
        container
        mt={2}
        direction="column"
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography
            sx={{
              fontFamily: "var(--text-font)",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            {product.name}
          </Typography>
        </Grid>
        <Grid item>
          <Icon>
            <StarRateRounded sx={{ color: "var(--star-color)" }} />
          </Icon>
          <Icon>
            <StarRateRounded sx={{ color: "var(--star-color)" }} />
          </Icon>
          <Icon>
            <StarRateRounded sx={{ color: "var(--star-color)" }} />
          </Icon>
          <Icon>
            <StarRateRounded sx={{ color: "var(--star-color)" }} />
          </Icon>
          <Icon>
            <StarRateRounded sx={{ color: "var(--star-color)" }} />
          </Icon>
        </Grid>
        <Grid item>
          <Typography
            mb={1}
            sx={{
              fontFamily: "var(--text-font)",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            {product.price}$
          </Typography>
        </Grid>
        <Grid container justifyContent="center" mb={2}>
          <AddToCartButton product={product} />
        </Grid>
      </Grid>
    </Paper>
    // </Grid>
  );
}
