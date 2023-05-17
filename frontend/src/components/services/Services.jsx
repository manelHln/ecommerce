import {
  CreditCard,
  LocalShippingOutlined,
  HeadsetMicOutlined,
  CurrencyExchangeOutlined,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Service } from "../../templates";

export default function Services() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Service
          text="Free delivery on all orders"
          title="Livraison rapide"
          icon={<LocalShippingOutlined sx={{ fontSize: 40 }} />}
        />

        <Service
          text="Free delivery on all orders"
          title="Support 24/7"
          icon={<HeadsetMicOutlined sx={{ fontSize: 40 }} />}
        />

        <Service
          text="Free delivery on all orders"
          title="Politique de retour"
          icon={<CurrencyExchangeOutlined sx={{ fontSize: 40 }} />}
        />

        <Service
          text="Free delivery on all orders"
          title="Paiement a la livraison"
          icon={<CreditCard sx={{ fontSize: 40 }} />}
        />
      </Grid>
    </Container>
  );
}
