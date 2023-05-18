import { Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Product from "../../templates/product/Product";
import { AllProducts } from "../../dummyData";

export default function BestSeller() {
  return (
    <Container>
      <Typography
        variant="h3"
        my={5}
        style={{ fontFamily: "var(--logo-font)" }}
        color="primary"
      >
        <Divider textAlign="right" className="section-titles">Produits Populaires</Divider>
      </Typography>
      <Grid container spacing={5}>
        {AllProducts.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} lg={3} mb={3} key={`${product.name} ${index}`}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}