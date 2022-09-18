import { Container } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
import { Latest } from "../../templates";
import "./latests.css"

export default function Latests(){
    return (
        <Container maxWidth="lg" spacing={5} >
            <Typography variant="h3" my={5} className="latests-heading">
                <Divider textAlign="left" className="section-titles">Latest products</Divider>
            </Typography>
            <Grid container spacing={5} mb={5}>
                <Latest price="50.45"/>
                <Latest price="54.48"/>
                <Latest price="100.35"/>
                <Latest price="53.25"/>
                <Latest price="50.45"/>
                <Latest price="87.45"/>
            </Grid>
        </Container>
    )
}