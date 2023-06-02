import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/iconify";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { CustomAlert } from "../../../components";

export default function LoginForm() {
  const navigate = useNavigate();
  const { LoginUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState("info");

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    axios
      .post(`${process.env.REACT_APP_API_ENV}auth/login`, data)
      .then((response) => {
        response.status === 200 && LoginUser(response.data);
        setSnackBarSeverity("success");
        setIsLoading(false);
        setSnackBarIsOpen(true);
        setSnackBarMessage("Successfully loged in !");
        navigate("/")
      })
      .catch((error) => {
        setSnackBarSeverity("error");
        setSnackBarIsOpen(true);
        setSnackBarMessage(error.response.data);
        setIsLoading(false);
      });
  }

  return (
    <>
      <CustomAlert
        open={snackBarIsOpen}
        setIsOpen={setSnackBarIsOpen}
        message={snackBarMessage}
        duration={6000}
        severity={snackBarSeverity}
      />
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name="email" label="Email address" />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="remember" />}
              label="Remember me"
            />
          </FormGroup>

          <Link variant="subtitle2" underline="hover">
            Mot de passe oublie
          </Link>
        </Stack>

        <LoadingButton
          loading={isLoading}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Login
        </LoadingButton>
      </form>
    </>
  );
}
