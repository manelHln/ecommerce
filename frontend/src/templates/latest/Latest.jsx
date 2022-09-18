import "./latest.css";
import { StarRateRounded } from "@mui/icons-material";
import { Paper, Grid, Typography, Button, Icon } from "@mui/material";
import { product_02 } from "../../images/Images";
import { RiShoppingBasket2Line } from "react-icons/ri";
import AddToCartButton from "../AddToCartButton";

export default function Latest(props) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper variant="outlined" square>
        <img src={product_02} alt="product" className="img" />

        <Grid container direction="row" justifyContent="space-between">
          <Grid item mx={3} mt={2}>
            <Typography
              variant="p"
              className="typography"
              color="primary"
              fontWeight={600}
            >
              Title goes here
            </Typography>
          </Grid>
          <Grid item mx={3} mt={2}>
            <Typography variant="p" className="typography" fontWeight={600}>
              ${props.price}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" m={3} className="typography">
          Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
          aspernatur.
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item mx={3}>
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

          <Grid item mx={3}>
            <Typography variant="body2" className="typography">
              reviews
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" my={2}>
          <AddToCartButton />
        </Grid>
      </Paper>
    </Grid>
  );
}
