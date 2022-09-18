import { Container } from "@mui/system";
import { Grid, Typography, Divider } from "@mui/material";
import { Category } from "../../templates";

export default function Categories(){
    return(
        <Container maxWidth="lg" spacing={5}>
            <Typography variant="h3" my={5} style={{fontFamily: "var(--logo-font)"}}>
                <Divider textAlign="left" className="section-titles">Categories</Divider>
            </Typography>
            <Grid container spacing={5} mb={5}>
                <Grid item xs={12} sm={6} lg={3} mb={3}>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} mb={3}>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} mb={3}>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} mb={3}>
                    <Category />
                </Grid>
            </Grid>
        </Container>
    )
}