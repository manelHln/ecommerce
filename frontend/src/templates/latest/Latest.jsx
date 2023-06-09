import "./latest.css";
import { Paper, Grid, Typography, Rating } from "@mui/material";
import AddToCartButton from "../AddToCartButton";
import { Link } from "react-router-dom";

export default function Latest({product, key}) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper variant="outlined" square>
        <img src={product.image} alt="product" className="img" />

        <Grid container direction="row" justifyContent="space-between">
          <Grid item mx={3} mt={2}>
            <Typography
              variant="p"
              className="typography"
              color="primary"
              fontWeight={600}
            >
              {product.name}
            </Typography>
          </Grid>
          <Grid item mx={3} mt={2}>
            <Typography variant="p" className="typography" fontWeight={600}>
              {product.price} FCFA
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" m={3} className="typography">
          {product.description}
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item mx={3}>
            <Rating value={5} />
          </Grid>

          <Grid item mx={3}>
            <Typography variant="body2" className="typography">
              <Link to={`../product/${product["_id"]}`}>Voir produit</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" my={2}>
          <AddToCartButton product={product} />
        </Grid>
      </Paper>
    </Grid>
  );
}
