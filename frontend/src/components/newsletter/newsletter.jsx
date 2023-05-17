import { Container } from "@mui/system";
import { Paper, Typography, Button, TextField } from "@mui/material";
import "./newsletter.css";

export default function NewsLetter() {
  const formStyle = {
    display: "flex",
    gap: "1rem",
  };

  return (
    <Container>
      <Paper
        variant="outlined"
        sx={{
          p: 6,
          textAlign: "center",
          m: 5,
          position: "relative",
          background: "url('assets/pictures/Wall39.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h3"
          mb={2}
          fontFamily="var(--logo-font)"
          color="black"
          className="newsletter-title"
        >
          Ne manquez plus aucune de nos offres!
        </Typography>
        <Typography variant="h5" mb={4} fontFamily="var(--logo-font)">
          Inscrivez vous a notre newsletter aujourd'hui
        </Typography>
        <form style={formStyle} className="newsletter-form">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email address"
            variant="outlined"
          />
          <Button type="submit" variant="contained" className="newsletter-btn">
            Subscribe
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
