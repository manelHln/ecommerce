import { Container } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
import { Latest } from "../../templates";
import { AllProducts } from "../../dummyData";
import "./latests.css";

export default function Latests() {
    console.log(AllProducts)
  return (
    <Container maxWidth="lg" spacing={5}>
      <Typography variant="h3" my={5} className="latests-heading" color="primary">
        <Divider textAlign="left" className="section-titles">
          Nouvel arrivage
        </Divider>
      </Typography>
      <Grid container spacing={5} mb={5}>
        {AllProducts.map((product) => (
          <Latest product={product} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
}
