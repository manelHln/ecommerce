import { Helmet } from "react-helmet-async";
// @mui
import { styled } from "@mui/material/styles";
import { Container, Typography, Stack, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { BsShieldLock } from "react-icons/bs";
// hooks
// sections
import { LoginForm } from "../sections/auth/login";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "calc(100vh - 100px)",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Connexion </title>
      </Helmet>

      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button size="large" color="inherit" variant="outlined">
                <BsShieldLock size={28} color="#DF3E30" />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Se connecter
              </Typography>
            </Divider>

            <Typography variant="body2" sx={{ mb: 3 }}>
              Pas de compte? {""}
              <Link to="../register" variant="subtitle2">
                S'enregistrer
              </Link>
            </Typography>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
