import React, { useEffect, useState } from "react";
import "./productPage.css";
import { Container, Grid } from "@mui/material";
import { MobileGallery, Description, Gallery, Loader } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../../templates/product/Product";

function App() {
  const [product, setProduct] = useState();
  const [productsRelated, setProductsRelated] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_ENV}products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!product) {
      return;
    }
    product.category.forEach((cat) => {
      axios
        .get(`${process.env.REACT_APP_API_ENV}products/category/${cat}`)
        .then((response) => {
          setProductsRelated((prev) => [...prev, ...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [product]);


  if (!product) {
    return <Loader loading={loading} />;
  }

  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <Gallery product={product} />
          <MobileGallery product={product} />
          <Description product={product} />
        </section>
        <div className="singleProductDown">
          <h2>Related Products</h2>
          <Grid container spacing={2} my={2}>
            {productsRelated?.map((product, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  mb={3}
                  key={`${product.name} ${index}`}
                >
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </main>
  );
}

export default App;
