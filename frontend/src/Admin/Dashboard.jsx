import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiSearchLine, RiAddLine, RiCloseCircleLine } from "react-icons/ri";
import { StarRateRounded } from "@mui/icons-material";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Button,
  Icon,
  Paper,
  TextField,
  Dialog,
} from "@mui/material";
// import { AllProducts } from "../dummyData";

const AddProductForm = ({show}) => {
  function handleProductSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post("http://localhost:8800/api/products", formData)
      .then((response) => {
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        setOpen(false);
      });
  }

  const [open, setOpen] = useState(show);
  function handleClose(event, reason) {
    debugger
    if (reason === "backdropClick") {
      setOpen(false);
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleProductSubmit}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              autoComplete="off"
              name="name"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Price"
              variant="outlined"
              autoComplete="off"
              name="price"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Category"
              variant="outlined"
              autoComplete="off"
              name="category"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="outlined-multiline-static"
              label="Description"
              variant="outlined"
              autoComplete="off"
              name="desc"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              type="file"
              id="outlined-basic"
              variant="outlined"
              autoComplete="off"
              name="image"
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              startIcon={<RiAddLine />}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

const Dashboard = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/api/products/").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  const handleAddProductClick = () => {
    setAddProduct(true);
  };

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        <Grid item lg={3}>
          <Button
            onClick={handleAddProductClick}
            variant="outlined"
            fullWidth
            startIcon={<RiAddLine />}
          >
            Add a Product
          </Button>
        </Grid>
        <Grid item lg={9}>
          <Grid container spacing={1}>
            <Grid item lg={9}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Search"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item lg={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<RiSearchLine />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        my={5}
        style={{ fontFamily: "var(--logo-font)" }}
      >
        <Divider textAlign="center">All Products</Divider>
      </Typography>
      <Grid container spacing={5}>
        {AllProducts.map((product, index) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              mb={3}
              key={`${product.name} ${index}`}
            >
              <Paper elevation={3} sx={{ position: "relative" }}>
                <RiCloseCircleLine
                  size={30}
                  style={{ position: "absolute", right: "10px", top: "5px" }}
                  className="rm-from-cart-admin-btn"
                />
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
                    <Button variant="outlined">Edit Product</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {addProduct && <AddProductForm show />}
    </Container>
  );
};

export default Dashboard;
