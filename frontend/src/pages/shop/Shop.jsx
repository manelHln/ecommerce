import React from "react";
import { Sidebar } from "../../components";
import Product from "../../templates/product/Product";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { AllProducts } from "../../dummyData";

function Shop() {
  return (
    <>
      <Container sx={{ mt: "2.5rem" }}>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <Sidebar />
          </Grid>
          <Grid item lg={8} >
            <Grid container spacing={5}>
              {AllProducts.map((product, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    xl={3}
                    mb={3}
                    key={`${product.name} ${index}`}
                  >
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
