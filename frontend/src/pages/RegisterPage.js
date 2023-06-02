import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import { Container, Typography, Stack, Button, Divider } from "@mui/material";
import { RegisterForm } from "../sections/auth/login";
import { BsShieldLock } from "react-icons/bs";


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


export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Inscription </title>
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
                S'inscrire
              </Typography>
            </Divider>

            <RegisterForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
