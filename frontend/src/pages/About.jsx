import { Grid, Typography, Divider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { product19, our_role, why_choose_us } from "../images/Images";

function About() {
  const imageStyle = {
    width: "30rem",
    height: "20rem",
  };

  const paragraphStyle = {
    fontFamily: "var(--text-font)",
    fontSize: "1.1rem",
    lineHeight: "1.6rem",
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          my={5}
          color="primary"
          style={{ fontFamily: "var(--logo-font)" }}
        >
          <Divider textAlign="left" className="section-titles">
            Notre Passion
          </Divider>
        </Typography>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={paragraphStyle}>
              Chez BiBo Shop, nous sommes passionnés par la recherche de gadgets
              innovants qui simplifient la vie de nos clients. Nous sommes fiers
              de vous proposer une gamme variée de produits de haute qualité qui
              répondent à tous vos besoins. Notre sélection de produits comprend
              des gadgets pour la maison, le travail et les loisirs. Nous avons
              des produits qui vous aident à économiser du temps, de l'énergie
              et de l'argent. Voici quelques exemples : Des chargeurs portables
              pour ne jamais être à court de batterie en déplacement. Des
              montres connectées pour suivre votre activité physique et votre
              santé. Des accessoires pour téléphones intelligents qui facilitent
              l'utilisation de votre appareil. Des outils de cuisine innovants
              qui vous permettent de préparer des repas délicieux en un rien de
              temps.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={product19} alt="our story" style={imageStyle} />
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          color="primary"
          my={5}
          style={{ fontFamily: "var(--logo-font)" }}
        >
          <Divider textAlign="right" className="section-titles">
            Pourquoi nous choisir?
          </Divider>
        </Typography>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12} md={6}>
            <img src={why_choose_us} alt="our story" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={paragraphStyle}>
              Nous travaillons constamment pour ajouter de nouveaux produits à
              notre gamme afin de répondre aux besoins de nos clients. Nous
              sommes convaincus que vous trouverez chez nous le gadget parfait
              pour faciliter votre vie quotidienne. Nous offrons également un
              excellent service client et une livraison rapide, pour que vous
              puissiez profiter rapidement de vos nouveaux gadgets. Explorez
              notre site web pour découvrir tous nos produits et n'hésitez pas à
              nous contacter si vous avez des questions ou des commentaires.
              Chez BiBo Shop, nous sommes là pour vous aider à simplifier votre
              vie.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
