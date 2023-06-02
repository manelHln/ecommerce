import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components";
import Product from "../../templates/product/Product";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useParams } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const {category} = useParams()
console.log(category)
  useEffect(() => {
    const url_to_fetch = category
      ? `${process.env.REACT_APP_API_ENV}products/category/${category}`
      : `${process.env.REACT_APP_API_ENV}products`;
    axios
      .get(url_to_fetch)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          setProducts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <>
      <Container sx={{ mt: "2.5rem" }}>
        <Grid container spacing={5}>
          {/* <Grid item lg={4}>
            <Sidebar />
          </Grid> */}
          <Grid item lg={12}>
            <Grid container spacing={5} lg={12}>
              {products.map((product, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
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
