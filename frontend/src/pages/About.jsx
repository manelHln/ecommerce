import { Grid, Typography, Divider } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { product19, product20, product21 } from "../images/Images";

function About() {

    const imageStyle = {
        width: "30rem",
        height: "20rem"
    }

    const paragraphStyle = {
        fontFamily: "var(--text-font)",
        fontSize: "1.1rem",
        lineHeight: "1.6rem"
    }

    return (
        <div>
            <Container>
                <Typography variant="h3" my={5} color="primary" style={{fontFamily: "var(--logo-font)"}}>
                    <Divider textAlign="left" className='section-titles'>Our Story</Divider>
                </Typography>
                <Grid container spacing={2} mb={5}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1' sx={paragraphStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={product19} alt="our story" style={imageStyle} />
                    </Grid>
                </Grid>

                <Typography variant="h3" color="primary" my={5} style={{fontFamily: "var(--logo-font)"}}>
                    <Divider textAlign="center" className='section-titles'>Why Choose Us</Divider>
                </Typography>
                <Grid container spacing={2} mb={5}>
                    <Grid item xs={12} md={6}>
                        <img src={product20} alt="our story" style={imageStyle} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1' sx={paragraphStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </Grid>
                </Grid>


                <Typography variant="h3" color="primary" my={5} style={{fontFamily: "var(--logo-font)"}}>
                    <Divider textAlign="right" className='section-titles'>Our Roles</Divider>
                </Typography>
                <Grid container spacing={2} mb={5}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1' sx={paragraphStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={product21} alt="our story" style={imageStyle} />
                    </Grid>
                </Grid>
            </Container>


        </div>
    )
}

export default About