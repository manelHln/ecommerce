import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/iconify";
import axios from "axios";
import { CustomAlert } from "../../../components";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState("info");

  const handleUserRegistration = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
    };
    axios
      .post(`${process.env.REACT_APP_API_ENV}auth/register`, data)
      .then((response) => {
        if (response.status === 201) {
          setSnackBarSeverity("success");
          setIsLoading(false);
          setSnackBarIsOpen(true);
          setSnackBarMessage("User created successfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        setSnackBarSeverity("error");
        setSnackBarIsOpen(true);
        setSnackBarMessage(error.response.data);
        setIsLoading(false);
      });
  };

  return (
    <>
      <CustomAlert
        open={snackBarIsOpen}
        setIsOpen={setSnackBarIsOpen}
        message={snackBarMessage}
        duration={6000}
        severity={snackBarSeverity}
      />
      <form onSubmit={handleUserRegistration}>
        <Stack spacing={3} mb={3}>
          <TextField name="username" label="Full name" />
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

        <LoadingButton
          fullWidth
          loading={isLoading}
          size="large"
          type="submit"
          variant="contained"
        >
          S'inscrire
        </LoadingButton>
      </form>
    </>
  );
}
