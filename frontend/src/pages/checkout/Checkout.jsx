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
} from "@mui/material";
import { RiShoppingBasket2Line, RiCloseCircleLine } from "react-icons/ri";
import { AllProducts } from "../../dummyData";

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

const qtyInputStyle = {
  borderColor: "#ddd",
  borderWidth: "1px",
  borderStyle: "solid",
  color: "#666",
  fontSize: "1rem",
  fontFamily: "Montserrat",
  outline: "none",
  textAlign: "center",
  padding: "0.3rem",
  width: "4rem",
  minHeight: "35px",
  verticalAlign: "middle",
}

const CheckoutProduct = () => {
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
          {AllProducts.map((product, index) => (
            <TableRow key={`${product.name} ${index}`}>
              <TableCell>
                <RiCloseCircleLine size={25} className="rm-from-cart-btn" />
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
              <StyledTableCell align="right"><input type="number" step="1" min="0" title="Qty" inputMode="numeric" autoComplete="off" style={qtyInputStyle} /></StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Checkout = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
      <Grid container width={750} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" mb={1}>Cart</Typography>
        <Grid item width="100%">
          <CheckoutProduct />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
