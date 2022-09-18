import { CreditCard, LocalShippingOutlined, HeadsetMicOutlined, CurrencyExchangeOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Service } from "../../templates";

export default function Services(){
    return (
        <Container>
        <Grid container spacing={2}>
            <Service text="Free delivery on all orders" title="Fast Delivery" icon={<LocalShippingOutlined sx={{ fontSize: 40 }} />}/>

            <Service text="Free delivery on all orders" title="24/7 Support" icon={<HeadsetMicOutlined sx={{ fontSize: 40 }} />}/>

            <Service text="Free delivery on all orders" title="Return Policy" icon={<CurrencyExchangeOutlined sx={{ fontSize: 40 }} />}/>

            <Service text="Free delivery on all orders" title="Secure Payment" icon={<CreditCard sx={{ fontSize: 40 }} />}/>
        </Grid>
        </Container>
    )
}