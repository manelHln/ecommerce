import { Container } from "@mui/system";
import { Paper, Typography, Button, TextField } from "@mui/material";
import "./newsletter.css"

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
          mb={4}
          fontFamily="var(--logo-font)"
          color="black"
          className="newsletter-title"
        >
          Subscribe today and get a discount up to 30% off!
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
