import { StarRateRounded } from "@mui/icons-material";
import { Grid, Paper, Typography, Icon } from "@mui/material";
import AddToCartButton from "../AddToCartButton";
import {useNavigate} from "react-router-dom"

export default function Product({ product }) {
  const navigate = useNavigate()

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
        onClick={()=> navigate(`/product/${product["_id"]}`)}
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
            {product.price} FCFA
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
