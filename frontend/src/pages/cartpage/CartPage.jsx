import React from "react";
import {
  Grid,
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
  Typography,
  Button,
} from "@mui/material";
import { RiShoppingBasket2Line, RiCloseCircleLine } from "react-icons/ri";
import { useShop } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { emptyCart } from "../../images/Images";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fbfbfb",
    color: "#abb8c3",
    fontSize: 18,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#abb8c3",
    fontSize: 18,
    fontWeight: 700,
  },
}));

const productImgThumbnailStyle = {
  maxWidth: "70px",
  maxHeight: "70px",
  objectFit: "cover",
};

const CheckoutProduct = () => {
  const { products, deleteProduct, total } = useShop();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Product</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={`${product.name} ${index}`}>
              <TableCell>
                <RiCloseCircleLine
                  size={25}
                  className="rm-from-cart-btn"
                  onClick={() => deleteProduct(product)}
                />
              </TableCell>
              <StyledTableCell align="right">
                <img
                  src={product.image}
                  alt={product.name}
                  style={productImgThumbnailStyle}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{product.name}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">{product.qty}</StyledTableCell>
              <StyledTableCell align="right">
                {product.price * product.qty}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Cart = () => {
  const { products } = useShop();
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", mt: "2rem", mb: "3rem" }}
    >
      <Grid
        container
        width={750}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {products.length > 0 ? (
          <>
            <Typography variant="h4" mb={1}>
              Cart
            </Typography>
            <Grid item width="100%">
              <CheckoutProduct />
            </Grid>
            <Link to="../checkout">
              <Button variant="contained" endIcon={<RiShoppingBasket2Line />}>
                Proceder au paiement
              </Button>
            </Link>
          </>
        ) : (
          <div>
            <Grid item>
              <img
                src={emptyCart}
                alt="product"
                style={{ width: "100%", height: "15rem" }}
              />

              <Typography
                className="typography"
                color="primary"
                fontWeight={600}
                style={{ textAlign: "center" }}
              >
                Oops il n'y a rien dans votre panier!
              </Typography>
              <Typography
                className="typography"
                color="primary"
                fontWeight={600}
                style={{ textAlign: "center" }}
              >
                Il semblerait que vous n'avez rien ajoute a votre panier
              </Typography>

              <Grid container justifyContent="center" my={2}>
                <Link to="../shop">
                  <Button
                    variant="contained"
                    endIcon={<RiShoppingBasket2Line />}
                  >
                    Boutique
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Cart;
